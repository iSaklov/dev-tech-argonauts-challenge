import React, { useContext, useEffect, useState }from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import AddArgo from './AddArgo'
import MyRange from '../UI/MyRange'
import CatLoader from '../UI/loader/catLoader/CatLoader'
import { useMessage } from '../../hooks/message.hook'
import { generateName } from '../../utils/names'
import M from "materialize-css"

const ArgoModal = () => {
  const { addArgonaut, boarding, setBoarding, uniqueImg, setUniqueImg } =
    useContext(ArgoContext)
	const [value, setValue] = useState(25)
	const message = useMessage()

	useEffect(() => {
		const modal = document.querySelector(".modal")
		M.Modal.init(modal)
	}, [boarding, setBoarding])

	const onChange = value => {
		setValue(value)
	}

	const summaryMessage = amount => {		
		if (amount > 1) {
			message(`${amount} argonautes ont été embarqués avec succès`)
		} else {
			message("Un(e) argonaute a été embarqué(e) avec succès")
		}
	}

	//TODO
	/* 
	The function waits for the completion of all Promises, after which it displays a message about the number of Argonots generated.

	The problem is that if any of the Argonots were not allowed on board (duplicate name, image, etc.) the final message would still indicate that the requested quantity was successfully loaded, not the actual one.
	*/
	
	const generateArgos = async (amount) => {
		setBoarding(true)
		const promisesArray = []

		for(let i = 0; i < amount; i++) {
      // promisesArray.push(addArgonaut(generateName(), uniqueImg))
      promisesArray[i] = await addArgonaut(generateName(), uniqueImg)
      // console.log(`promisesArray ${i}`, promisesArray[i])
    }

		Promise.all(promisesArray)
      .then((result) => {
        summaryMessage(result.length)
      })
      .catch((reason) => {
        message(reason)
      })
      .finally(
				setBoarding(false)
			)
	}

	if(boarding) {
		return (
			<CatLoader
				style={{paddingTop: "10%"}}
				text = "Embarquement en cours. Veuillez patienter..."
			/>
		)
	}

	return (
    <div id="addModal" className="modal">
      <div className="modal-content">
        <AddArgo
          addArgonaut={addArgonaut}
          uniqueImg={uniqueImg}
          setUniqueImg={setUniqueImg}
        />
        <p>Ou opter pour une génération automatique de membres d'équipage</p>
        <p>
          Cela peut prendre quelques minutes. Veuillez de ne pas interrompre
          l'embarquement{' '}
        </p>
        <MyRange value={value} onChange={onChange} min={0} max={uniqueImg ? 73 : 100} />
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-light btn"
          onClick={generateArgos.bind(null, value)}
        >
          C'est parti !
        </a>
      </div>
    </div>
  )
}

export default ArgoModal