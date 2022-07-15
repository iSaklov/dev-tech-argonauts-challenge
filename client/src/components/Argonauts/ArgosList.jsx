import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import ArgoItem from './ArgoItem'
import DeleteAllArgos from './DeleteAllArgos'

const ArgosList = ({ argonauts, page, numPerPage, onDeleteAll }) => {
	const [currentNum, setCurrentNum] = useState()

	useEffect(() => {
		setCurrentNum((page - 1) * numPerPage)
	}, [page, numPerPage])

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
		<div className="my_table">
			<h4>Membres de l'équipage</h4>
			<table className="centered striped">
				<thead>
						<tr>
							<th>№</th>
							<th>Nom d'argonaut</th>
							<th>Date d'embarquation</th>
							<th>Sa belle gueule</th>
							<th>
								<DeleteAllArgos onDeleteAll={onDeleteAll}/>
							</th>
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
								<ArgoItem
									argonaut={argonaut}
									index={currentNum + index + 1}
									btnBlocker={btnBlocker}
								/>
							</CSSTransition>
						)}
					</TransitionGroup>
				</tbody>
			</table>
		</div>
	)
}

export default ArgosList