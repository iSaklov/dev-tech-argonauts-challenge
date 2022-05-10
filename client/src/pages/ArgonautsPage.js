import React, { useState, useEffect, useContext, useCallback } from 'react'
//import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { ArgosList } from '../components/ArgosList'
// import { ArgonautCard } from '../components/ArgonautCard'

export const ArgonautsPage = () => {
	const {token} = useContext(AuthContext)
	const {loading, request} = useHttp()
	const [argonauts, setArgonauts] = useState([])
	//const argonautId = useParams().id

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

	if(loading) {
		return <Loader />
	}

	return (
		<>
			{ !loading && argonauts && <ArgosList argonauts={argonauts} />}
		</>
	)
}