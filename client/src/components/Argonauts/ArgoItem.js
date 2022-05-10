import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArgoContext } from '../../context/Context'
import Modal from '../Modal/Modal'

export const ArgoItem = ({ argonaut, index }) => {

	const { updateArgonaut, removeArgonaut } = useContext(ArgoContext)
	const [name, setName] = useState(argonaut.name)
	const [selected, setSelected] = useState(false)

	const classes = []

	const updateHandler = event => {
		event.preventDefault()
		// classes.push('.done')
		setSelected(true)
	}

	const saveHandler = event => {
		event.preventDefault()
		if(name.trim()) {
			updateArgonaut(argonaut._id, name)
			setName(name)
		}
	}

	const cancelHandler = event => {
		event.preventDefault()
		setName(argonaut.name)
		setSelected(false)
	}

	return (
		<tr key={argonaut._id}>
			<td>{index + 1}</td>
			<td>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					readOnly={!selected}
					autoFocus={selected}
					autoComplete={selected}
					onChange={event => setName(event.target.value)}
					className={classes.join(' ')}
				/>
			</td>
			<td>{new Date(argonaut.date).toLocaleDateString()}</td>
			<td>
				<Link to={`/detail/${argonaut._id}`}>Ouvrir</Link>
			</td>
			<td>
				<Modal />
			</td>
			<td>
				{ !selected
					? <button onClick={updateHandler} disabled={selected}>Modifier</button>
					: 
					<>
						<button onClick={saveHandler} disabled={!selected}>Sauvegarder</button>
						<button onClick={cancelHandler} disabled={!selected}>Annuler</button>
					</>
				}
				{/* <button onClick={updateArgonaut.bind(null, argonaut._id)}>Modifier</button> */}
				<button onClick={removeArgonaut.bind(null, argonaut._id)}>Supprimer</button>
			</td>
		</tr>
	)
}