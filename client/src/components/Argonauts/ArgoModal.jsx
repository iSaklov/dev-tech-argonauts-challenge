import React, { useEffect, useState }from 'react'
import AddArgo from './AddArgo'
import MyRange from '../UI/MyRange'
import CatLoader from '../UI/loader/catLoader/CatLoader'
import { useMessage } from '../../hooks/message.hook'
import { generateName } from '../../utils/names'
import M from "materialize-css"

const ArgoModal = ({ onCreate, boarding, setBoarding }) => {
	const [value, setValue] = useState(25)
	const message = useMessage()

	useEffect(() => {
		const modal = document.querySelector(".modal")
		M.Modal.init(modal)
	}, [boarding, setBoarding])

	const onChange = value => {
		setValue(value)
	}

	const summaryMessage = amount => {		
		if (amount > 1) {
			message(`${amount} argonautes ont été embarqués avec succès`)
		} else {
			message("Un(e) argonaute a été embarqué(e) avec succès")
		}
	}

	const generateArgos = async (amount) => {
		console.log('START')
		
		setBoarding(true)
		const arr = []

		for(let i = 0; i < amount; i++) {
			arr[i] = onCreate(generateName(), true)
			console.log('ARG ', arr[i])
		}

		Promise.all(arr).then((argos) => {
			const arr = []
			console.log('ARGOS ', argos)
			for(const argo of argos) {
				// console.log('STATUS', argo)
				console.log('A ', argo instanceof Promise.status["resolved"])
			}

			summaryMessage(argos.length)
			setBoarding(false)
		}).catch(reason => {
			message(reason)
			setBoarding(false)
		})
	}

	if(boarding) {
		return (
			<CatLoader
				style={{paddingTop: "10%"}}
				text = "Embarquement en cours. Veuillez patienter..."
			/>
		)
	}

	return (
		<div id="addModal" className="modal">
			<div className="modal-content">
				<AddArgo onCreate={ onCreate } />
				<p>Ou opter pour une génération automatique de membres d'équipage</p>
				<p>Cela peut prendre quelques minutes. Veuillez de ne pas interrompre l'embarquement </p>
				<MyRange value={value} onChange={onChange} min={0} max={100}/>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					className="modal-close waves-effect waves-light btn"
					onClick={generateArgos.bind(null, value)}
				>
					C'est parti !
				</a>
			</div>
		</div>
	)
}

export default ArgoModal