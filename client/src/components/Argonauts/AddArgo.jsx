import React, { useState } from 'react'
import MyInput from '../UI/MyIput'
import toCapitalize from '../../utils/capitalize'
import M from 'materialize-css'
// import { useInputValue } from '../../hooks/inputValue.hook'

const AddArgo = ({ onCreate }) => {
	const [name, setName] = useState('')

	const submitHandler = () => {
		if (name.trim()) {
			onCreate(toCapitalize(name.trim()))
			setName('')
		} else {
			M.toast({ html: 'Admettez que le nom entièrement composé de blancs semble étrange' })
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