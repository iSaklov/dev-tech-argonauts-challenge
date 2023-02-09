import React, { useEffect } from 'react'
import M from 'materialize-css'

const MyInput = ({ clearInput, ...props }) => {

  useEffect(() => {
    M.updateTextFields()
  }, [])

  return (
    <>
      <input id={`input-${props.type}`} {...props} />
      <label htmlFor={`input-${props.type}`}>{props.label}</label>
      <i className="material-icons prefix" onClick={clearInput}>
        {props.icon}
      </i>
    </>
  )
}

export default MyInput
