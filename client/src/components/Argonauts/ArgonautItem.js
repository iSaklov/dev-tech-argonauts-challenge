import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListContext } from '../../context/ListContext'
import Modal from '../Modal/Modal'

export const ArgonautItem = ({ argonaut, index, onChange }) => {
	// { argonauts.map((argonaut, index) => {
	// 	return (
	// 		<tr key={argonaut._id}>
	// 			<td>{index + 1}</td>
	// 			<td>{argonaut.name}</td>
	// 			<td>{new Date(argonaut.date).toLocaleDateString()}</td>
	// 			<td>
	// 				<Link to={`/detail/${argonaut._id}`}>Ouvrir</Link>
	// 			</td>
	// 			<td>
	// 				<button>Modifier</button>
	// 				<button onClick={() => console.log(argonaut._id)}>Supprimer</button>
	// 			</td>
	// 		</tr>
	// 	)
	// })}

	const {removeArgonaut} = useContext(ListContext)
		return (
		<tr key={argonaut._id}>
			<td>{index + 1}</td>
			<td>{argonaut.name}</td>
			<td>{new Date(argonaut.date).toLocaleDateString()}</td>
			<td>
				<Link to={`/detail/${argonaut._id}`}>Ouvrir</Link>
			</td>
			<td>
				<Modal />
			</td>
			<td>
				<button onClick={() => onChange(argonaut.id)}>Modifier</button>
				<button onClick={removeArgonaut.bind(null, argonaut.id)}>Supprimer</button>
			</td>
		</tr>
	)
}