import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/Context'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { ArgonautCard } from '../components/Argonauts/ArgonautCard'

export const DetailPage = () => {
	const {token} = useContext(AuthContext)
	const {request, loading} = useHttp()
	const [argonaut, setArgonaut] = useState(null)
	const argonautId = useParams().id

	const getArgonaut = useCallback( async () => {
		try {
			const fetched = await request(`/api/argonaut/${argonautId}`, 'GET', null, {
				Authorization: `Bearer ${token}`
			})
			setArgonaut(fetched)
		} catch (e) {}
	}, [token, argonautId, request])

	useEffect(() => {
		getArgonaut()
	}, [getArgonaut])

	if(loading) {
		return <Loader />
	}

	return (
		<>
			{ !loading && argonaut && <ArgonautCard argonaut={argonaut} />}
		</>
	)
}