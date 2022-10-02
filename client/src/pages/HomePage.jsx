// https://codepen.io/wildcodeschool/pen/LYpoBBN
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ArgoContext } from '../context/ArgoContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
// import { useArgos } from '../hooks/useArgos'
import { Loader } from '../components/Loader'
// import CatLoader from '../components/UI/loader/CatLoader'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
import MyModal from '../components/UI/modal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import { getTotalPages } from '../utils/pages'

export const HomePage = () => {
	const { token } = useContext(AuthContext)
	const { loading, request, error, clearError} = useHttp()
	const message = useMessage()
	const [argonauts, setArgonauts] = useState([])
	const [filter, setFilter] = useState({query: '', sort: ''})
	// const sortedAndSearchedArgos = useArgos(argonauts, filter.query, filter.sort)
	const [page, setPage] = useState(1)
	const [totalArgonauts, setTotalArgonauts] = useState()
	const [totalPages, setTotalPages] = useState()
	const [numPerPage, setNumPerPage] = useState(10)

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	// useEffect(() => {
	// 	window.M.updateTextFields()
	// }, [])

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

	const addArgonaut = async (name) => {
		try {
			const img = await getImage()
			const data = await request('/api/argonaut/add', 'POST', { name, img }, {
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

	const getImage = useCallback( async () => {
		try{
			const fetched = await request('https://api.thecatapi.com/v1/images/search?limit=1&category_ids=2')
			return fetched[0].url
		} catch (e) {}
	}, [request])

	const changePage = useCallback((page) => {
		setPage(page)
		fetchArgonauts(page, numPerPage, filter.query, filter.sort)
	}, [fetchArgonauts, numPerPage, filter.query, filter.sort])

	useEffect(() => {
		fetchArgonauts(page, numPerPage, filter.query, filter.sort)
		setTotalPages(getTotalPages(totalArgonauts, numPerPage))
	}, [page, numPerPage, totalArgonauts, fetchArgonauts, filter.query, filter.sort])

	useEffect(() => {
		if(!argonauts.length && page > 1) {
			changePage(totalPages)
		}
	}, [argonauts, page, totalPages, changePage])

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut, getImage }}>
			<main>
				<MyModal onCreate={ addArgonaut }/>
				<ArgoFilter
					filter={filter}
					setFilter={setFilter}
					numPerPage={numPerPage}
					setNumPerPage={setNumPerPage}
				/>
				{loading
					? <Loader />
					:
					<>
						<ArgosList argonauts={argonauts} page={page} numPerPage={numPerPage} onDeleteAll={removeAllArgonauts}/>
						{argonauts.length
							? <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
							: null
						}
					</>
				}
			</main>
		</ArgoContext.Provider>
	)
}