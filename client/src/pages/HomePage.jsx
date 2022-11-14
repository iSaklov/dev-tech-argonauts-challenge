// https://codepen.io/wildcodeschool/pen/LYpoBBN
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ArgoContext } from '../context/ArgoContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { Loader } from '../components/Loader'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
import ArgoModal from '../components/Argonauts/ArgoModal'
import { getTotalPages } from '../utils/pages'

export const HomePage = () => {
	const { token } = useContext(AuthContext)
	const { loading, request, error, clearError} = useHttp()
	const message = useMessage()
	const [argonauts, setArgonauts] = useState([])
	const [filter, setFilter] = useState({query: '', sort: ''})
	const [page, setPage] = useState(1)
	const [totalArgonauts, setTotalArgonauts] = useState()
	const [totalPages, setTotalPages] = useState()
	const [numPerPage, setNumPerPage] = useState(10)
	const [boarding, setBoarding] = useState(false)

	const fetchArgonauts = useCallback(async (page, numPerPage, query, sort) => {
		try {
			// Make sure you send 'page' as query parameters to your node.js server
			const data = await request(`/api/argonaut?page=${page}&numperpage=${numPerPage}&search=${query}&sort=${sort}`, 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(data.argonauts)
			setTotalArgonauts(data.size)
		} catch (e) {}
	}, [token, request])

	const addArgonaut = async (name, boarding = false) => {
		try {
			const img = await getImage()
			const data = await request('/api/argonaut/add', 'POST', { name, img, boarding }, {
				Authorization: `Bearer ${token}`
			})
			changePage(1) // returns to the first page when adding a new element
			message(data.message)
		} catch (e) {}
	}

	const updateArgonaut = async (id, newName) => {
		try {
			const data = await request(`api/argonaut/${id}`, 'PUT', { newName }, {
				Authorization: `Bearer ${token}`
			}) 
			setArgonauts(argonauts.map(argo => (
				argo._id === id
					? {...argo, name: data.argonaut.name}
					: argo
			)))
			message(data.message)
		} catch (e) {}
	}

	const removeAllArgonauts = async () => {
		try {
			const data = await request(`api/argonaut/`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			changePage(1)
			message(data.message)
		} catch (e) {}
	}

	const removeArgonaut = async (id) => {
		try {
			const data = await request(`api/argonaut/${id}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			// setArgonauts(argonauts.filter(argo => argo._id !== id))
			changePage(page)
			message(data.message)
		} catch (e) {}
	}

	//TODO Regenerate new image if it is already in the database
	const getImage = useCallback( async () => {
		try{
			const fetched = await request('https://api.thecatapi.com/v1/images/search?limit=1&category_ids=2')
			return fetched[0].url
		} catch (e) {}
	}, [request])

	const changePage = useCallback((page) => {
		setPage(page)
		fetchArgonauts(page, numPerPage, filter.query, filter.sort)
	}, [numPerPage, filter.query, filter.sort, fetchArgonauts])

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	useEffect(() => {
		fetchArgonauts(page, numPerPage, filter.query, filter.sort)
	}, [page, numPerPage, filter.query, filter.sort, fetchArgonauts])

	useEffect(() => {
		setTotalPages(getTotalPages(totalArgonauts, numPerPage))
		if(page > totalPages && page !== 1) {
			setPage(page - 1)
		}
	}, [totalArgonauts, numPerPage, page, totalPages])

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut, getImage }}>
			<main>
				<ArgoModal
					onCreate={addArgonaut} 
					boarding={boarding} 
					setBoarding={setBoarding}
				/>
				{loading && !boarding
					? <Loader />
					: boarding
					? null
					: <>
						<ArgoFilter
							filter={filter}
							setFilter={setFilter}
							numPerPage={numPerPage}
							setNumPerPage={setNumPerPage}
						/>
						<ArgosList 
							argonauts={argonauts} 
							setArgonauts={setArgonauts}
							page={page} 
							numPerPage={numPerPage} 
							totalPages={totalPages}
							changePage={changePage}
							onDeleteAll={removeAllArgonauts}
						/>
					</>
				}
			</main>
		</ArgoContext.Provider>
	)
}