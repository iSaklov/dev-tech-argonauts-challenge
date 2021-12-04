import React, { useContext } from 'react'
import { ListContext } from '../context/ListContext'
import { Link } from 'react-router-dom'

export const ArgonautsList = ({ argonauts }) => {
	const { removeArgonaut } = useContext(ListContext)
	// removeArgonaut.bind(null, argonaut._id)
	
	if (!argonauts.length) {
		return <p className="center">La liste de membres de l'équipageest est vide</p>
	}

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
				{ argonauts.map((argonaut, index) => {
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
				})}
			</tbody>
		</table>
		</>
	)
}