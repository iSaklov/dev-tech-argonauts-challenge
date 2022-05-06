import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { ListContext } from '../context/ListContext'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { ArgonautAdd } from '../components/Argonauts/ArgonautAdd'
import { ArgonautsList } from '../components/Argonauts/ArgonautsList'
import Modal from '../components/Modal/Modal'

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
		setArgos(argos.filter(argo => argo.id !== id))
	}

	function addArgonaut(name) {
		setArgos(argos.concat([
			{
				id: Date.now(),
				name
			}
		]))
	}

	function argonautUp(id) {
		console.log('argo ID = ' + id)
	}

	if (loading) {
		return <Loader />
	}

	return (
		<ListContext.Provider value={{ removeArgonaut }}>
			{/* <div className="row">
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
			</div> */}
			<ArgonautAdd onCreate={addArgonaut}/>
			{loading && <Loader />}
			{argos.length ? (
				<ArgonautsList argonauts={argos} onToggle={argonautUp} />
			) : (
				loading ? null : (
					<p className="center">Votre liste de membres de l'équipage est est vide</p>
				)
			)}
			<Modal />
			<div>
				{/* { !loading && argonauts && <ArgonautsList argonauts={argonauts} />} */}
				{ !loading && <ArgonautsList argonauts={argos} onToggle={argonautUp} />}
			</div>
		</ListContext.Provider>
	)
}