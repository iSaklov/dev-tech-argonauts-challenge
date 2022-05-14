import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArgoContext } from '../../context/Context'
import Modal from '../Modal/Modal'

const ArgoItem = ({ argonaut, number }) => {

	const { updateArgonaut, removeArgonaut } = useContext(ArgoContext)
	const [argo, setArgo] = useState(argonaut)
	const [name, setName] = useState(argonaut.name)
	const [selected, setSelected] = useState(false)

	const classes = []

	const updateHandler = () => {
		setSelected(true)
	}

	const saveHandler = event => {
		event.preventDefault()
		if(name.trim()) {
			updateArgonaut(argo._id, argo.name)
			// setSelected(false) // default reloading by component
		}
	}

	const cancelHandler = () => {
		setName(argonaut.name)
		setSelected(false)
	}

	return (
		<tr key={argo._id}>
			<td>{number}</td>
			<td>
				<input
					type="text"
					id="name"
					name="name"
					value={argo.name}
					readOnly={!selected}
					autoFocus={selected}
					// { selected ? autoFocus="true" : null}
					// { selected ? readOnly="false" : readOnly="true"}
					// autoComplete={selected}
					onChange={event => setArgo({...argo, name: event.target.value})}
					// className={classes.join(' ')}
				/>
			</td>
			<td>{new Date(argo.date).toLocaleDateString()}</td>
			<td>
				<Link to={`/detail/${argo._id}`}>Ouvrir</Link>
			</td>
			<td>
				<Modal />
			</td>
			<td>
				{ !selected
					?
						<div className=''>
							<button
								className="btn waves-effect waves-light yellow"
								onClick={updateHandler}
							>
								<i className="small material-icons">edit</i>
							</button>
							<button
								className="btn waves-effect waves-light red"
								onClick={removeArgonaut.bind(null, argo._id)}
							>
								<i className="small material-icons">delete</i>
							</button>
						</div>
					: 
						<div div className=''>
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
						</div>
				}
			</td>
		</tr>
	)
}

export default ArgoItem