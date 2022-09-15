// https://codepen.io/wildcodeschool/pen/LYpoBBN
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ArgoContext } from '../context/ArgoContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
// import CatLoader from '../components/UI/loader/CatLoader'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
// import { useArgos } from '../hooks/useArgos'
import Pagination from '../components/UI/pagination/Pagination'
import { getTotalPages } from '../utils/pages'
import MyModal from '../components/UI/modal/MyModal'

export const HomePage = () => {
	const { token } = useContext(AuthContext)
	const { request, loading } = useHttp()
	const [argonauts, setArgonauts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	// const sortedAndSearchedArgos = useArgos(argonauts, filter.sort, filter.query)
	const [page, setPage] = useState(1)
	const [totalArgonauts, setTotalArgonauts] = useState()
	const [totalPages, setTotalPages] = useState()
	const [numPerPage, setNumPerPage] = useState(10)

	// useEffect(() => {
	// 	window.M.updateTextFields()
	// }, [])

	const fetchArgonauts = useCallback(async (page, numPerPage, search, sort) => {
		try {
			// Make sure you send 'page' as query parameters to your node.js server
			const data = await request(`/api/argonaut?page=${page}&numperpage=${numPerPage}&search=${search}&sort=${sort}`, 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(data.argonauts)
			setTotalArgonauts(data.size)
		} catch (e) {}
	}, [token, request])

	const addArgonaut = async (name) => {
		try {
			const img = await getImage()
			await request('/api/argonaut/add', 'POST', { name, img }, {
				Authorization: `Bearer ${token}`
			})
			changePage(1) // returns to the first page when adding a new element
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
		} catch (e) {}
	}

	const removeAllArgonauts = async () => {
		try {
			await request(`api/argonaut/`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			changePage(1)
		} catch (e) {}
	}

	const removeArgonaut = async (id) => {
		try {
			await request(`api/argonaut/${id}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			// setArgonauts(argonauts.filter(argo => argo._id !== id))
			changePage(page)
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
					// ? <CatLoader />
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