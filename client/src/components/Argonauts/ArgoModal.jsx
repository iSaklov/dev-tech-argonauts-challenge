import React, { useState }from 'react'
import AddArgo from './AddArgo'
import MyRange from '../UI/MyRange'
import { useMessage } from '../../hooks/message.hook'
import { generateName } from '../../utils/names'

const ArgoModal = ({ onCreate }) => {
	const [value, setValue] = useState(25)
	const message = useMessage()

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

	const generateArgos = amount => {
		const arr = []

		for(let i = 0; i < amount; i++) {
			arr[i] = onCreate(generateName())
		}

		Promise.all(arr).then((argos) => {
			summaryMessage(argos.length)
		}).catch(reason => {
			message(reason)
		})
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