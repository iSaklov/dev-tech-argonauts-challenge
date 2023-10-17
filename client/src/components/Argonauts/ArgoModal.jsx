import React, { useContext, useEffect, useState } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import AddArgo from './AddArgo'
import MyRange from '../UI/MyRange'
import CatLoader from '../UI/loader/catLoader/CatLoader'
import { useMessage } from '../../hooks/message.hook'
import { generateName } from '../../utils/names'
import { UNIQUE_IMG_DB_LIMIT } from '../../constants/constants'
import { Modal } from 'materialize-css'

const ArgoModal = () => {
  const {
    addArgonaut,
    boarding,
    setBoarding,
    isUniqueImage,
    setIsUniqueImage
  } = useContext(ArgoContext)
  const [value, setValue] = useState(25)
  const message = useMessage()

  const onChange = (value) => {
    setValue(value)
  }

  const summaryMessage = (successfulPromises, failedPromises) => {
    const successful = successfulPromises.length
    const failed = failedPromises.length

    if (failed > 0) {
      message(
        failed !== 1
          ? `${failed} argonautes ont trop fait la fête et n'ont pas pu être embarqué(e)s sur le navire d'Argo`
          : "Un.e argonaute n'a pas pu s'est présenté.e"
      )
    }

    if (successful > 0) {
      message(
        successful !== 1
          ? `${successful} argonautes ont pris place à bord avec succès`
          : 'Un argonaute a pris place à bord avec succès'
      )
    }
  }

  const generateArgos = async (amount) => {
    setBoarding(true)
    const successfulPromises = []
    const failedPromises = []

    try {
      for (let i = 0; i < amount; i++) {
        const result = await addArgonaut(generateName(), isUniqueImage)
        successfulPromises.push(result)
      }
    } catch (error) {
      failedPromises.push(error)
    } finally {
      setBoarding(false)
      summaryMessage(successfulPromises, failedPromises)
    }
  }

  useEffect(() => {
    const modal = document.querySelector('#addArgoModal')
    Modal.init(modal)
  }, [boarding])

  if (boarding) {
    return (
      <CatLoader
        style={{ paddingTop: '10%' }}
        text="Embarquement en cours. Veuillez patienter..."
      />
    )
  }

  return (
    <div id="addArgoModal" className="modal">
      <div className="modal-content">
        <AddArgo
          addArgonaut={addArgonaut}
          isUniqueImage={isUniqueImage}
          setIsUniqueImage={setIsUniqueImage}
        />
        <p>Ou opter pour une génération automatique de membres d'équipage</p>
        <p>
          Cela peut prendre quelques minutes. Veuillez de ne pas interrompre
          l'embarquement
        </p>
        <MyRange
          value={value}
          onChange={onChange}
          min={0}
          max={isUniqueImage ? UNIQUE_IMG_DB_LIMIT : 100}
        />
      </div>
      <div className="modal-footer">
        <button
          className="modal-close waves-effect waves-light btn"
          onClick={generateArgos.bind(null, value)}
        >
          C'est parti !
        </button>
      </div>
    </div>
  )
}

export default ArgoModal
