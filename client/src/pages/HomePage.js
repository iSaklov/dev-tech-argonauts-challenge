import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { ArgoContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { AddArgo } from '../components/Argonauts/AddArgo'
import { Loader } from '../components/Loader'
import { ArgosList } from '../components/Argonauts/ArgosList'


export const HomePage = () => {
	const [argos, setArgos] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(argos => {
				setTimeout(() => {
					setArgos(argos)
				}, 2000)
			})
	}, [])

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

	const addArgo = async (argonaut) => {
		try {
			await request('/api/argonaut', 'POST', { name: argonaut }, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(
				argonauts.concat([
					{
						name: argonaut,
						date: Date.now()
					}
				])
			)
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

	const updateArgonaut = async (id) => {
		try {
			await request(`api/argonaut/${id}`, 'PUT', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonauts(argonauts.map())
		} catch (e) {}
	}

	return (
		<ArgoContext.Provider value={{ updateArgonaut, removeArgonaut }}>
			<AddArgo onCreate={ addArgo } />
			{loading ? <Loader /> : <ArgosList argonauts={ argonauts } />}
		</ArgoContext.Provider>
	)
}