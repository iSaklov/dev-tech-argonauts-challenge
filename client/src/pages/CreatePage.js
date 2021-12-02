import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const CreatePage = () => {
	const navigate = useNavigate()
	const auth = useContext(AuthContext)
	const {request} = useHttp()
	const [argonaut, setArgonaut] = useState('')

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const pressHandler = async event => {
		if (event.key === 'Enter') {
			try {
				const data = await request('/api/argonaut/add', 'POST', { name: argonaut }, {
					Authorization: `Bearer ${auth.token}`
				})
				console.log(data)
				navigate(`/detail/${data.argonaut._id}`)
			} catch (e) {}
		}
	}

	// const clickHandler = async event => {
	// 	if (event.key === 'Enter') {
	// 		try {
	// 			const data = await request('/api/argonaut/add', 'POST', { name: argonaut }, {
	// 				Authorization: `Bearer ${auth.token}`
	// 			})
	// 			console.log(data)
	// 			navigate(`/detail/${data.argonaut._id}`)
	// 		} catch (e) {}
	// 	}
	// }

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<h2>Ajouter un(e) Argonaute</h2>
				<label htmlFor="argonaut">Nom de l'Argonaute</label>
				<input
					placeholder="Charalampos"
					id="argonaut"
					type="text"
					value={argonaut}
					onChange={e => setArgonaut(e.target.value)}
					onKeyPress={pressHandler}
				/>
			</div>
		</div>
	)
}