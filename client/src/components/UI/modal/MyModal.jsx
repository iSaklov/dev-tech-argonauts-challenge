import React, { useEffect, useState, useRef }from 'react';
import AddArgo from '../../Argonauts/AddArgo';
import MyRange from '../range/MyRange';
import { generateName } from '../../../utils/names'
// import M from 'materialize-css'

const MyModal = ({ onCreate }) => {
	const [value, setValue] = useState(25)
	const timerRef = useRef(null)
	const addingTimeMs = 500

	const onChange = value => {
		setValue(value)
	}

	const generateArgos = amount => {
		for(let i = 0; i < amount; i++) {
			timerRef.current = setTimeout(() => {
				// console.log(i)
				onCreate(generateName())
			}, addingTimeMs * i)
		}
		timerRef.current = setTimeout(() => {
			window.M.toast({ html: amount > 1
																			? `${amount} argonautes ont été embarqués avec succès`
																			: "Argonaute a été embarqué avec succès"
										})
		}, addingTimeMs * value)
	}

	useEffect(() => {
		// Clear the interval when the component unmounts
		// console.log(`clear worked`)
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<>
			<div id="addModal" className="modal">
				<div className="modal-content">
					<AddArgo onCreate={ onCreate } />
					<p>Ou opter pour une génération automatique de membres d'équipage</p>
					<p>Cela peut prendre quelques minutes. Veuillez de ne pas interrompre l'embarquement </p>
					<MyRange value={value} onChange={onChange}/>
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
		</>
	)
}

export default MyModal;