import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

export default class MySelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
			value: '',
		}
		this.handleChange = this.handleChange.bind(this);
  }

	componentDidMount(){
		// console.log(M);
		M.AutoInit();
	}

	handleChange(event) {
		console.log(event.target.value)
		this.setState({
			value: event.target.value
		})
		// return event.target.value
  }

	render() {
		return (
			<div className="input-field col s12">
				<select
					value={this.props.value}
					onChange={this.handleChange}
				>
					<option disabled value="">{this.props.defaultValue}</option>
					{this.props.options.map(option =>
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					)}
				</select>
				<label>Materialize Select</label>
			</div>
		)
	}
}