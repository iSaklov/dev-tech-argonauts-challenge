import React, { useContext, useEffect, useState } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import CatModal from '../CatModal/CatModal'

const ArgoItem = ({ argonaut, index, btnBlocker }) => {
	const { removeArgonaut, updateArgonaut } = useContext(ArgoContext)
	const [name, setName] = useState(argonaut.name)
	const [selected, setSelected] = useState(false)

	useEffect(() => {
		setName(argonaut.name)
	}, [argonaut])
 
	const editHandler = () => {
		btnBlocker()
		setSelected(true)
	}

	const saveHandler = event => {
		event.preventDefault()
		if(name.trim() && name !== argonaut.name) {
			updateArgonaut(argonaut._id, name)
		}
		btnBlocker()
		setSelected(false)
	}

	const cancelHandler = () => {
		setName(argonaut.name)
		// setArgo({...argo, name: argonaut.name})
		btnBlocker()
		setSelected(false)
	}

	if(!argonaut.name) {
		return (
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
					readOnly={!selected}
					autoFocus={selected}
					autoComplete="false"
					onChange={event => setName(event.target.value)}
				/>
			</td>
			<td className="hide-on-small-only">{new Date(argonaut.date).toLocaleDateString()}</td>
			<td>
				<CatModal name={argonaut.name} img={argonaut.img}/>
			</td>
			<td>
				{ !selected
					?
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
					: 
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
				}
			</td>
		</tr>
	)
}

export default ArgoItem