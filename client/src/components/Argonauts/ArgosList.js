import React from 'react'
import { useHttp } from '../../hooks/http.hook'
import { ArgoItem } from './ArgoItem'

export const ArgosList = ({ argonauts }) => {
	if (!argonauts.length) {
		return <p className="center">La liste de membres de l'équipage est vide</p>
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
					<ArgoItem argonaut={argonaut} key={argonaut._id} index={index} onUpdate />
					)
				})}
			</tbody>
		</table>
		</>
	)
}