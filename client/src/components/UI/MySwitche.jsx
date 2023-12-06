import React from 'react'

const MySwitche = ({ checked, setChecked, ...props }) => {
  const switchHandler = () => {
    setChecked(!checked)
  }

  return (
    <div className="switch">
      <h6>{props.title}</h6>
      <label>
        Non
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={switchHandler.bind(null)}
        />
        <span className="lever" />
        Oui
      </label>
    </div>
  )
}

export default MySwitche
