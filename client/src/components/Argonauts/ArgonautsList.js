import React, { useContext } from 'react'
import { ListContext } from '../../context/ListContext'
import { Link } from 'react-router-dom'
import { ArgonautItem } from './ArgonautItem'

export const ArgonautsList = ( props ) => {
	const { removeArgonaut } = useContext(ListContext)
	// removeArgonaut.bind(null, argonaut._id)
	
	// if (!props.argonauts.length) {
	// 	return <p className="center">Votre liste de membres de l'équipage est est vide</p>
	// }

	return (
		<>
		<h4>Membres de l'équipage</h4>
		<table>
			<thead>
			<tr>
				<th>#</th>
				<th>Nom d'argonaut</th>
				<th>Date d'embarquation</th>
				<th>Voir sa belle gueule</th>
			</tr>
			</thead>
			<tbody>
				{ props.argonauts.map((argonaut, index) => {
					return <ArgonautItem argonaut={argonaut} key={argonaut._id} index={index} onChange={props.onToggle}/>
				})}
				{/* { argonauts.map((argonaut, index) => {
					return (
						<tr key={argonaut._id}>
							<td>{index + 1}</td>
							<td>{argonaut.name}</td>
							<td>{new Date(argonaut.date).toLocaleDateString()}</td>
							<td>
								<Link to={`/detail/${argonaut._id}`}>Ouvrir</Link>
							</td>
							<td>
								<button>Modifier</button>
								<button onClick={() => console.log(argonaut._id)}>Supprimer</button>
							</td>
						</tr>
					)
				})} */}
			</tbody>
		</table>
		</>
	)
}