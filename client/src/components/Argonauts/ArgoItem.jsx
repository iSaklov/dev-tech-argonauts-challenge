import React, { useContext, useState, useRef } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import CatModal from '../CatModal'

const ArgoItem = ({ argonaut, index, blockButtonsWhileEditing }) => {
  const { removeArgonaut, updateArgonaut } = useContext(ArgoContext)
  const [name, setName] = useState(argonaut.name)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef(null)

  const editHandler = () => {
    blockButtonsWhileEditing()
    setIsEditing(true)
    inputRef.current.focus()
  }

  const saveHandler = (event) => {
    event.preventDefault()
    if (name.trim() && name !== argonaut.name) {
      updateArgonaut(argonaut._id, name)
    }
    blockButtonsWhileEditing()
    setIsEditing(false)
  }

  const cancelHandler = () => {
    setName(argonaut.name)
    blockButtonsWhileEditing()
    setIsEditing(false)
  }

  if (!argonaut.name) {
    return (
      // In this section, a placeholder string is generated when there is no Argonaut. All buttons are rendered in a hidden state to ensure proper layout on different devices.
      <tr key={argonaut._id} className="__empty">
        <td />
        <td />
        <td className="hide-on-small-only" />
        <td>
          <button className="btn-floating btn-large">
            <i className="material-icons">adb</i>
          </button>
        </td>
        <td>
          <button className="btn">
            <i className="small material-icons">edit</i>
          </button>
          <button className="btn">
            <i className="small material-icons">delete</i>
          </button>
        </td>
      </tr>
    )
  }

  return (
    <tr key={argonaut._id}>
      <td>{index}</td>
      <td>
        <input
          type="text"
          value={name}
          readOnly={!isEditing}
          ref={inputRef}
          autoComplete="false"
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td className="hide-on-small-only">
        {new Date(argonaut.date).toLocaleDateString()}
      </td>
      <td>
        <CatModal name={argonaut.name} img={argonaut.img} />
      </td>
      <td>
        {!isEditing ? (
          <>
            <button
              className="btn waves-effect waves-light yellow lighten-1 __edit-btn __btn-blocked"
              onClick={editHandler}
            >
              <i className="small material-icons">edit</i>
            </button>
            <button
              className="btn waves-effect waves-light __delete-btn __btn-blocked"
              onClick={removeArgonaut.bind(null, argonaut._id)}
            >
              <i className="small material-icons">delete</i>
            </button>
          </>
        ) : (
          <>
            <button
              className="btn waves-effect waves-light green lighten-1 __edit-confirm-btn"
              type="submit"
              onClick={saveHandler}
            >
              <i className="small material-icons">check_circle</i>
            </button>
            <button
              className="btn waves-effect waves-light red lighten-1 __delete-confirm-btn"
              onClick={cancelHandler}
            >
              <i className="small material-icons">cancel</i>
            </button>
          </>
        )}
      </td>
    </tr>
  )
}

export default ArgoItem
