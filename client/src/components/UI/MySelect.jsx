import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export default class MySelect extends Component {

  constructor(props) {
    super(props)
    this.state = {
			value: '',
		}
  }

	componentDidMount(){
		M.AutoInit();
	}

	onChange(event) {
		this.props.onChange(event.target.value)
		this.setState({
			value: event.target.value
		})
		// console.log(`The value of state is ${event.target.value}`)
	}

	render() {
		return (
			<div className="input-field col s12">
				<select
					value={this.state.value}
					onChange={this.onChange.bind(this)}
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