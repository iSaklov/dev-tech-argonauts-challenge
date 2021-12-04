import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ListContext } from '../context/ListContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { ArgonautsList } from '../components/ArgonautsList'

export const HomePage = () => {
	const navigate = useNavigate()
	// const auth = useContext(AuthContext)
	const {token} = useContext(AuthContext)
	const {request, loading} = useHttp()
	const [argonaut, setArgonaut] = useState('')
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

	const pressHandler = async event => {
		if (event.key === 'Enter') {
			try {
				const data = await request('/api/argonaut/add', 'POST', { name: argonaut }, {
					Authorization: `Bearer ${token}`
				})
				console.log(data)
				// navigate(`/detail/${data.argonaut._id}`)
				fetchArgonauts()
			} catch (e) {}
		}
	}

	const buttonHandler = async () => {
		try {
			const data = await request('/api/argonaut/add', 'POST', { name: argonaut }, {
				Authorization: `Bearer ${token}`
			})
			console.log(data)
			fetchArgonauts()
		} catch (e) {}
	}

	function removeArgonaut(id) {
		setArgonauts(argonauts.filter(argonaut => argonaut.id !== id))
	}

	if (loading) {
		return <Loader />
	}

	return (
		<>
			<div className="row">
				<div className="col s8 offset-s2">
					<h3>Ajouter un(e) Argonaute</h3>
					<p>
						<label htmlFor="argonaut">Nom de l'Argonaute</label>
					</p>
					<input
						placeholder="Charalampos"
						id="argonaut"
						type="text"
						value={argonaut}
						onChange={e => setArgonaut(e.target.value)}
						onKeyPress={pressHandler}
						style={{maxWidth: "70%"}}
					/>

					<button
						className="btn waves-effect waves-light _wild" type="submit"
						name="action"
						onClick={buttonHandler}>
						Embarquer
  					</button>
				</div>
			</div>
			<div>
				<ListContext.Provider value={{ removeArgonaut }}>
					{ !loading && argonauts && <ArgonautsList argonauts={argonauts} />}
				</ListContext.Provider>
			</div>
		</>
	)
}