import React, { useEffect } from 'react'
import M from 'materialize-css'

const MyInput = (props) => {

	useEffect(() => {
		M.updateTextFields()
	}, [])

	return (
		// <input {...props} />
		<>
			<input id="input_text" {...props}/>
			<label for="input_text">Input text</label>
			<i className="material-icons prefix">search</i>
		</>
	)
}

export default MyInput