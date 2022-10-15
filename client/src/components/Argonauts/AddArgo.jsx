import React, { useState } from 'react'
import MyInput from '../UI/MyIput'
// import { useInputValue } from '../../hooks/inputValue.hook'

const AddArgo = ({ onCreate }) => {
	const [name, setName] = useState('')

	const submitHandler = event => {
		if (name.trim()) {
			onCreate(name)
			setName('')
		}
	}

	const enterHandler = event => {
		if(event.key === 'Enter') {
			submitHandler()
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<h5>Ajouter un(e) Argonaute</h5>
				<label htmlFor="argonaut">Nom de l'Argonaute</label>
				<MyInput
					id="argonaut"
					type="text"
					placeholder="Charalampos + &#9166;"
					autoComplete="false" 
					value={name}
					onChange={event => setName(event.target.value)}
					onKeyPress={enterHandler}
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