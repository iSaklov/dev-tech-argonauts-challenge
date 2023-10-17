import React, { Component } from 'react'
import M from 'materialize-css'

class MySelect extends Component {
  componentDidMount() {
    const select = document.querySelectorAll('select')
    M.FormSelect.init(select)
  }

  onChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div className="input-field">
        <select defaultValue={this.props.value} onChange={this.onChange}>
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

export default MySelect
