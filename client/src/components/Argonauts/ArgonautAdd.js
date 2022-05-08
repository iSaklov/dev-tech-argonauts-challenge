import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthContext'
import { useInputValue } from '../../hooks/inputValue.hook'

export const ArgonautAdd = ({ onCreate }) => {
	// 1 VERSION CLASSIC REACT
	
	const [value, setValue] = useState('');
	const [argonaut, setArgonaut] = useState('')

	function submitHandler(event) {
		event.preventDefault()

		if (value.trim()) {
			onCreate(value)
			setValue('')
		}
	}

	return (
		<div className="row">
			<div className="col s8 offset-s2">
				<h3>Ajouter un(e) Argonaute</h3>
				<form onSubmit={submitHandler}>
					<p>
						<label htmlFor="argonaut">Nom de l'Argonaute</label>
					</p>
					<input
						placeholder="Charalampos"
						id="argonaut"
						type="text"
						value={value}
						onChange={e => setValue(e.target.value)}
						// onKeyPress={pressHandler}
						style={{maxWidth: "70%"}}
					/>
					<button
						className="btn waves-effect waves-light _wild" type="submit"
						name="action"
						// onClick={buttonHandler}
						>
						Embarquer
					</button>
				</form>
			</div>
		</div>
	)

	// 2 VERSION CUSTOM HOOK

	// const input = useInputValue('')


	// function submitHandler(event) {
	// 	event.preventDefault()

	// 	if (input.value().trim()) {
	// 		onCreate(input.value())
	// 		input.clear()
	// 	}
	// }

	// return (
	// 	<div className="row">
	// 		<div className="col s8 offset-s2">
	// 			<h3>Ajouter un(e) Argonaute</h3>
	// 			<p>
	// 				<label htmlFor="argonaut">Nom de l'Argonaute</label>
	// 			</p>
	// 			<form onSubmit={submitHandler}>
	// 				{/* <input
	// 					placeholder="Charalampos"
	// 					id="argonaut"
	// 					type="text"
	// 					value={value}
	// 					onChange={e => setValue(e.target.value)}
	// 					// onKeyPress={pressHandler}
	// 					style={{maxWidth: "70%"}}
	// 				/> */}

	// 				<input
	// 					placeholder="Charalampos"
	// 					id="argonaut"
	// 					type="text"
	// 					{...input.bind}
	// 					style={{maxWidth: "70%"}}
	// 				/>

	// 				<button
	// 					className="btn waves-effect waves-light _wild" type="submit"
	// 					name="action"
	// 					// onClick={buttonHandler}
	// 					>
	// 					Embarquer
	// 				</button>
	// 			</form>
	// 		</div>
	// 	</div>
	// )
}