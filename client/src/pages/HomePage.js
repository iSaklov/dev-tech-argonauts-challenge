import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { ArgoContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import AddArgo from '../components/Argonauts/AddArgo'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
// import { useArgos } from '../hooks/useArgos'

export const HomePage = () => {

	const navigate = useNavigate()
	const { token } = useContext(AuthContext)
	const { request, loading } = useHttp()
	const [argonauts, setArgonauts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	// const sortedAndSearchedArgos = useArgos(argonauts, filter.sort, filter.query)

	const sortedArgos = useMemo(() => {
		console.log('SORTED FUNCTION WORKED')
		if(filter.sort) {
			return [...argonauts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return argonauts
	}, [filter.sort, argonauts])

	const sortedAndSearchedArgos = useMemo(() => {
		console.log('SAERCH FUNCTION WORKED')
		return sortedArgos.filter(argo => argo.name.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedArgos])

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const fetchArgonauts = useCallback( async () => {
		try {
			const fetched = await request('/api/argonaut/', 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(fetched)
		} catch (e) {}
	}, [token, request])

	const getImage = useCallback( async () => {
		try{
			const fetched = await request('https://api.thecatapi.com/v1/images/search?limit=1&category_ids=2')
			return fetched[0].url
		} catch (e) {}
	}, [])

	useEffect(() => {
		fetchArgonauts()
	}, [fetchArgonauts])

	const addArgonaut = async (name) => {
		try {
			const img = await getImage()
			const data = await request('/api/argonaut/add', 'POST', { name, img }, {
				Authorization: `Bearer ${token}`
			})
			// setArgonauts([...argonauts, data.argonaut])
			setArgonauts(argonauts.concat(data.argonaut))
		} catch (e) {}
	}

	const removeArgonaut = async (id) => {
		try {
			await request(`api/argonaut/${id}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(argonauts.filter(argo => argo._id !== id))
		} catch (e) {}
	}

	const updateArgonaut = async (id, newName) => {
		try {
			const data = await request(`api/argonaut/${id}`, 'PUT', { newName }, {
				Authorization: `Bearer ${token}`
			}) 
			setArgonauts( argonauts.map(argo => (
				argo._id === id
					? {...argo, name: data.argonaut.name}
					: argo
			)))
		} catch (e) {}
	}

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut }}>
			<AddArgo onCreate={ addArgonaut } />
			<ArgoFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{loading ? <Loader /> : <ArgosList argonauts={sortedAndSearchedArgos} />}
		</ArgoContext.Provider>
	)
}