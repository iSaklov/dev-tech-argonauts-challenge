import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ArgoContext } from '../../context/Context'
import Modal from '../Modal/Modal'

export const ArgoItem = ({ argonaut, index }) => {

	const { updateArgonaut, removeArgonaut } = useContext(ArgoContext)

	return (
		<tr key={argonaut._id}>
			<td>{index + 1}</td>
			<td>
				<input
					type="text"
					id="name"
					name="name"
					value={argonaut.name}
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
				<button onClick={updateArgonaut.bind(null, argonaut._id)}>Modifier</button>
				<button onClick={removeArgonaut.bind(null, argonaut._id)}>Supprimer</button>
			</td>
		</tr>
	)
}