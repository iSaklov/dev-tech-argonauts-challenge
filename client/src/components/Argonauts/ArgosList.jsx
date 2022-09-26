import React, { useState, useEffect, useRef } from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import ArgoItem from './ArgoItem'
import DeleteAllArgos from './DeleteAllArgos'

const ArgosList = ({ argonauts, page, numPerPage, onDeleteAll }) => {
	const [currentNum, setCurrentNum] = useState()
	const [argos, setArgos] = useState([])
	const nodeRef = useRef(null)

	useEffect(() => {
		setArgos(argonauts)
	}, [argonauts])

	useEffect(() => {
		setCurrentNum((page - 1) * numPerPage)
	}, [page, numPerPage])

	useEffect(() => {
		const dummy = {
			_id: Date.now(),
			name: undefined,
			date: undefined,
			img: undefined,
			owner: undefined
		}
		
		if(argos.length < numPerPage) {
			for(let i = argos.length; i < numPerPage; i++) {
				setArgos([...argos, dummy])
			}
		}
	}, [argos, numPerPage])

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
		<div>
			<h4>Membres de l'équipage</h4>
			<table className="centered striped argo__table">
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
						{ argos.map((argonaut, index) =>
						  <CSSTransition
								key={argonaut._id}
								nodeRef={nodeRef} in timeout={250}
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