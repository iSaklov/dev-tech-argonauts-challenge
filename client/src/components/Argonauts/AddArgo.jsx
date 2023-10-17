import React, { useEffect } from 'react'
import { useInputValue } from '../../hooks/inputValue.hook'
import { useMessage } from '../../hooks/message.hook'
import toCapitalize from '../../utils/capitalize'
import MyInput from '../UI/MyIput'
import MySwitche from '../UI/MySwitche'
// import UniqueImageModal from './UniqueImageModal'
import M from 'materialize-css'

const AddArgo = ({ addArgonaut, isUniqueImage, setIsUniqueImage }) => {
  const nameInput = useInputValue()
  const message = useMessage()

  const submitHandler = () => {
    const name = nameInput.value().trim()
    if (name) {
      addArgonaut(toCapitalize(name), isUniqueImage)
      nameInput.clear()
    } else {
      message(
        "Avouez, un nom composé entièrement d'espaces, c'est un peu étrange, non ?"
      )
    }
  }

  const enterHandler = (event) => {
    if (event.key === 'Enter') {
      submitHandler()
    }
  }

  useEffect(() => {
    M.updateTextFields()
  }, [])

  return (
    <div className="row __add-argo-header">
      <div className="__switch-wrapp">
        {/* <isUniqueImageModal /> */}
        <MySwitche
          title="Image unique"
          checked={isUniqueImage}
          setChecked={setIsUniqueImage}
        />
      </div>
      <div className="col s8 offset-s2">
        <h5>Ajouter un(e) Argonaute</h5>
        <div className="input-field mt-2">
          <MyInput
            // Spread operator for binding input field properties {value, onChange}
            {...nameInput.bind}
            id="add-argonaut-input"
            type="text"
            placeholder="Charalampos + &#9166;"
            autoComplete="false"
            onKeyPress={enterHandler}
            clearInput={nameInput.clear}
            label="Nom de l'Argonaute"
            icon="clear"
          />
        </div>
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
