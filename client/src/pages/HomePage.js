import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react'
// import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { ArgoContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import AddArgo from '../components/Argonauts/AddArgo'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
import { useArgos } from '../hooks/useArgos'
import Pagination from '../components/UI/pagination/Pagination'
import { getTotalPages } from '../utils/pages'

export const HomePage = () => {

	// const navigate = useNavigate()
	const { token } = useContext(AuthContext)
	const { request, loading } = useHttp()
	const [argonauts, setArgonauts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const sortedAndSearchedArgos = useArgos(argonauts, filter.sort, filter.query)
	const [page, setPage] = useState(1)
	const [totalArgonauts, setTotalArgonauts] = useState()
	const [totalPages, setTotalPages] = useState()
	const limitPerPage = 3

	// console.log(`totalArgonauts : ${totalArgonauts}`)
	// console.log(`totalPages : ${totalPages}`)
	// console.log(`page : ${page}`)

	useEffect(() => {
		fetchArgonauts(page)
	}, [])

	useEffect(() => {
		setTotalPages(getTotalPages(totalArgonauts, limitPerPage))
	}, [totalArgonauts])

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const fetchArgonauts = useCallback(async (page) => {
		try {
			// Make sure you send 'page' as query parameters to your node.js server
			const data = await request(`/api/argonaut?page=${page}`, 'GET', null, {
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
			// setArgonauts(argonauts.concat(data.argonaut))
			setArgonauts(argonauts.length < limitPerPage 
									? [data.argonaut, ...argonauts]
									: [data.argonaut, ...argonauts.slice(0, -1)]
									)
			setTotalArgonauts(totalArgonauts + 1)
			if(page !== 1) {
				setPage(1) 			// returns to the first page when adding a new element
			}
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

	const removeArgonaut = async (id) => {
		try {
			await request(`api/argonaut/${id}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(argonauts.filter(argo => argo._id !== id))
			setTotalArgonauts(totalArgonauts - 1)
		} catch (e) {}
	}

	const getImage = useCallback( async () => {
		try{
			const fetched = await request('https://api.thecatapi.com/v1/images/search?limit=1&category_ids=2')
			return fetched[0].url
		} catch (e) {}
	}, [])

	const changePage = (page) => {
		setPage(page)
		fetchArgonauts(page)
	}

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut }}>
			<AddArgo onCreate={ addArgonaut } />
			<ArgoFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{loading
				? <Loader />
				: <ArgosList argonauts={sortedAndSearchedArgos} />
			}
			<Pagination page={page} totalPages={totalPages} changePage={changePage}/>
		</ArgoContext.Provider>
	)
}