import React, { useEffect } from 'react'
import M from 'materialize-css'

const MyInput = ({ id, value, onChange, label, clearInput, icon, ...rest }) => {
  useEffect(() => {
    M.updateTextFields()
  }, [])

  return (
    <>
      <input id={id} value={value} onChange={onChange} {...rest} />
      <label htmlFor={id}>{label}</label>
      <i className="material-icons prefix" onClick={clearInput}>
        {icon}
      </i>
    </>
  )
}

export default MyInput
