import React, { useContext, useState } from 'react'
// import { useInputValue } from '../../hooks/inputValue.hook'

export const AddArgo = ({ onCreate }) => {
	const [argonaut, setArgonaut] = useState('')

	const submitHandler = event => {
		event.preventDefault()
		if (argonaut.trim()) {
			onCreate(argonaut)
			setArgonaut('')
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<h3>Ajouter un(e) Argonaute</h3>
				<p>
					<label htmlFor="argonaut">Nom de l'Argonaute</label>
				</p>
				<input
					placeholder="Charalampos"
					id="argonaut"
					type="text"
					value={argonaut}
					onChange={event => setArgonaut(event.target.value)}
					style={{maxWidth: "70%"}}
				/>

				<button
					className="btn waves-effect waves-light _wild"
					type="submit"
					onClick={submitHandler}
				>
					Embarquer
				</button>
			</div>
		</div>
	)
}