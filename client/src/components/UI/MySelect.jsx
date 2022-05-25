import React, { Component } from 'react';
// import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

// const MySelect = ({ options, defaultValue, value, onChange }) => {
// 	return (
// 		<select
// 			value={value}
// 			onChange={event => onChange(event.target.value)}
// 		>
// 			<option disabled value="">{defaultValue}</option>
// 			{options.map(option =>
// 				<option key={option.value} value={option.value}>
// 					{option.name}
// 				</option>
// 			)}
// 		</select>
// 	)
// }

// export default MySelect

export default class MySelect extends Component{
	componentDidMount(){
		console.log(M);
		M.AutoInit();
	}
	render() {
		return (
			<div class="input-field col s12">
				<select>
					<option value="" disabled selected>Choose your option</option>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
				<label>Materialize Select</label>
			</div>
		)
	}
}