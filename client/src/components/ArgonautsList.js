import React from 'react'
import { Link } from 'react-router-dom'

export const ArgonautsList = ({ argonauts }) => {
	if (!argonauts.length) {
		return <p className="center">La liste est vide</p>
	}

	return (
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
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}