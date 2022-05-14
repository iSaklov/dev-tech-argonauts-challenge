import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { ArgoContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import AddArgo from '../components/Argonauts/AddArgo'
import ArgosList from '../components/Argonauts/ArgosList'




export const HomePage = () => {
	// const [argos, setArgos] = useState([])

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
	// 		.then(response => response.json())
	// 		.then(argos => {
	// 			setTimeout(() => {
	// 				setArgos(argos)
	// 			}, 2000)
	// 		})
	// }, [])

	const navigate = useNavigate()
	const { token } = useContext(AuthContext)
	const { request, loading } = useHttp()
	const [argonauts, setArgonauts] = useState([])

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const fetchArgonauts = useCallback( async () => {
		try {
			const fetched = await request(`/api/argonaut/`, 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(fetched)
		} catch (e) {}
	}, [token, request])

	useEffect(() => {
		fetchArgonauts()
	}, [fetchArgonauts])

	const addArgonaut = async (name) => {
		try {
			const data = await request('/api/argonaut/add', 'POST', { name }, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts([...argonauts, data.argonaut])
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

	const updateArgonaut = async (id, name) => {
		try {
			await request(`api/argonaut/${id}`, 'PUT', { name }, {
				Authorization: `Bearer ${token}`
			})
			// setArgonauts(argonauts.map())
		} catch (e) {}
	}

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut }}>
			<AddArgo onCreate={ addArgonaut } />
			{loading ? <Loader /> : <ArgosList argonauts={ argonauts } />}
		</ArgoContext.Provider>
	)
}