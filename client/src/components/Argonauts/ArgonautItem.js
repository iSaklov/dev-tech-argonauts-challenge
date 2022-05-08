import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ArgoContext } from '../../context/AuthContext'
import Modal from '../Modal/Modal'

export const ArgonautItem = ({ argonaut, index, onChange }) => {

	const { removeArgonaut } = useContext(ArgoContext)

	return (
		<tr key={argonaut._id}>
			<td>{index + 1}</td>
			<td>{argonaut.name}</td>
			{/* <td>{argonaut.title}</td> */}
			<td>{new Date(argonaut.date).toLocaleDateString()}</td>
			<td>
				<Link to={`/detail/${argonaut._id}`}>Ouvrir</Link>
			</td>
			<td>
				<Modal />
			</td>
			<td>
				<button onClick={() => onChange(argonaut.id)}>Modifier</button>
				<button onClick={removeArgonaut.bind(null, argonaut._id)}>Supprimer</button>
			</td>
		</tr>
	)
}