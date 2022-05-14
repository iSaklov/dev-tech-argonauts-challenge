import React, { useState } from 'react'
// import { useInputValue } from '../../hooks/inputValue.hook'

const AddArgo = ({ onCreate }) => {
	const [name, setName] = useState('')

	const submitHandler = event => {
		event.preventDefault()
		if (name.trim()) {
			onCreate(name)
			setName('')
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
					id="name"
					type="text"
					value={name}
					onChange={event => setName(event.target.value)}
					style={{maxWidth: "70%"}}
					autoComplete="false"
				/>
				<button
					className="btn waves-effect waves-light"
					type="submit"
					onClick={submitHandler}
				>
					Embarquer
				</button>
			</div>
		</div>
	)
}

export default AddArgo