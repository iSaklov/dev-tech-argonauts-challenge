import React, { Component } from 'react'
import M from 'materialize-css'

export default class MySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    const select = document.querySelectorAll('select')
    M.FormSelect.init(select)
  }

  onChange(event) {
    this.props.onChange(event.target.value)
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div className="input-field">
        <select value={this.state.value} onChange={this.onChange.bind(this)}>
          {this.props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <label>{this.props.label}</label>
      </div>
    )
  }
}
