import React, { useEffect } from 'react'
import M from 'materialize-css'

const MyInput = (props) => {

	useEffect(() => {
		M.updateTextFields()
	}, [])

	return (
		<>
			<input id={`input-${props.type}`} {...props}/>
			<label htmlFor={`input-${props.type}`}>{props.label}</label>
			<i className="material-icons prefix">{props.icon}</i>
		</>
	)
}

export default MyInput