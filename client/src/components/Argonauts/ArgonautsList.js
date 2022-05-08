import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthContext'
import { ArgonautItem } from './ArgonautItem'

export const ArgonautsList = ({ argonauts }) => {
	// const { removeArgonaut } = useContext(AuthContext)
	// removeArgonaut.bind(null, argonaut._id)
	
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
					// <ArgonautItem argonaut={argonaut} key={argonaut._id} index={index} onChange={onToggle}/>
					<ArgonautItem argonaut={argonaut} key={argonaut._id} index={index} />
					)
				})}
			</tbody>
		</table>
		</>
	)
}