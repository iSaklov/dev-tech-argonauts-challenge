import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArgoContext } from '../../context/Context'
import Modal from '../Modal/Modal'

const ArgoItem = ({ argonaut, index }) => {

	const { removeArgonaut, updateArgonaut } = useContext(ArgoContext)
	// const [argo, setArgo] = useState(argonaut)
	const [name, setName] = useState(argonaut.name)
	const [selected, setSelected] = useState(false)

	const classes = []

	useEffect(() => {
		setName(argonaut.name)
	}, [argonaut])

	const updateHandler = () => {
		setSelected(true)
	}

	const saveHandler = event => {
		event.preventDefault()
		if(name.trim()) {
			updateArgonaut(argonaut._id, name)
			// onUpdate(argo._id, name)
			// setSelected(false) // default reloading by component
		}
	}

	const cancelHandler = () => {
		setName(argonaut.name)
		// setArgo({...argo, name: argonaut.name})
		setSelected(false)
	}

	return (
		<tr key={argonaut._id}>
			<td>{index}</td>
			<td>
				<input
					type="text"
					value={name}
					readOnly={!selected}
					autoFocus={selected}
					// { selected ? autoFocus="true" : null }
					// { selected ? readOnly="false" : readOnly="true" }
					// autoComplete={selected}
					onChange={event => setName(event.target.value)}
					// onChange={event => setargonaut({...argonaut, name: event.target.value})}
					// className={classes.join(' ')}
				/>
			</td>
			<td>{new Date(argonaut.date).toLocaleDateString()}</td>
			<td>
				<Modal name={argonaut.name} img={argonaut.img}/>
			</td>
			<td>
				{ !selected
					?
					<>
						<button
							className="btn waves-effect waves-light yellow"
							onClick={updateHandler}
						>
							<i className="small material-icons">edit</i>
						</button>
						<button
							className="btn waves-effect waves-light red"
							onClick={removeArgonaut.bind(null, argonaut._id)}
						>
							<i className="small material-icons">delete</i>
						</button>
					</>
					: 
					<>
						<button
							className="btn waves-effect waves-light green"
							type="submit"
							onClick={saveHandler}
						>
							<i className="small material-icons">check_circle</i>
						</button>
						<button
							className="btn waves-effect waves-light red"
							onClick={cancelHandler}
						>
							<i className="small material-icons">cancel</i>
						</button>
					</>
				}
			</td>
		</tr>
	)
}

export default ArgoItem