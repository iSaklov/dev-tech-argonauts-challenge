import React, { useState } from 'react'
import MyInput from '../UI/MyIput'
import MySwitche from '../UI/MySwitche'
import { useMessage } from '../../hooks/message.hook'
import toCapitalize from '../../utils/capitalize'
// import { useInputValue } from '../../hooks/inputValue.hook'

const AddArgo = ({ onCreate, uniqueImg, setUniqueImg }) => {
  const [name, setName] = useState('')
  const message = useMessage()

  const submitHandler = () => {
    if (name.trim()) {
      onCreate(toCapitalize(name.trim()), uniqueImg)
      setName('')
    } else {
      message(
        'Admettez que le nom entièrement composé de blancs semble étrange'
      )
    }
  }

  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      submitHandler()
    }
  }

  const switchHandler = () => {
		setUniqueImg(!uniqueImg)
  }

  return (
    <div className="row">
      <MySwitche title="Image unique" switchHandler={switchHandler} />
      <div className="col s8 offset-s2">
        <h5>Ajouter un(e) Argonaute</h5>
        <label htmlFor="argonaut">Nom de l'Argonaute</label>
        <MyInput
          id="argonaut"
          type="text"
          placeholder="Charalampos + &#9166;"
          autoComplete="false"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onKeyPress={enterHandler}
        />
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onClick={submitHandler}
        >
          Embarquer
        </button>
      </div>
    </div>
  )
}

export default AddArgo