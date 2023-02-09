import React from 'react'

const MySwitche = ({ switchHandler, ...props }) => {
  return (
    <div className="switch">
      <h6>{props.title}</h6>
      <label>
        Non
        <input type="checkbox" />
        <span className="lever" onClick={switchHandler.bind(null)}></span>
        Oui
      </label>
    </div>
  )
}

export default MySwitche
