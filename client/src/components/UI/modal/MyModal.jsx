import React, { useEffect, useState }from 'react';
import AddArgo from '../../Argonauts/AddArgo';
import MyRange from '../range/MyRange';
import { generateName } from '../../../utils/names'

const MyModal = ({ onCreate }) => {
	const [value, setValue] = useState(25)

	const onChange = value => {
		setValue(value)
		console.log(`value : ${value}`)
	}

	const generateArgos = amount => {
		for(let i = 0; i < amount; i++) {
    	(function(index) {
        setTimeout(() => {
					console.log(index)
					onCreate(generateName())
				}, i * 500);
    	})(i);
		}
	}

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
	);
};

export default MyModal;