import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import MySelect from '../UI/MySelect'
import ArgoItem from './ArgoItem'

const ArgosList = ({ argonauts }) => {
	const btnBlocker = () => {
		const buttons = document.querySelectorAll('.btn_blocked')
		for(const btn of buttons) {
			btn.classList.toggle('button_disabler')
		}
	}

	if (!argonauts.length) {
		return (
				<p className="center">La liste de membres de l'équipage est vide</p>
		)
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
							<th>Sa belle gueule</th>
						</tr>
				</thead>
				<tbody>
					<TransitionGroup component={null}>
						{ argonauts.map((argonaut, index) =>
						  <CSSTransition
								key={argonaut._id}
								timeout={250}
								classNames="argonaut"
            	>
								<ArgoItem argonaut={argonaut} index={index + 1} btnBlocker={btnBlocker}/>
							</CSSTransition>
						)}
					</TransitionGroup>
				</tbody>
			</table>
		</>
	)
}

export default ArgosList