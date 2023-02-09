import React, { useContext, useEffect } from 'react'
// import { TransitionGroup, CSSTransition } from "react-transition-group"
import { ArgoContext } from '../../context/ArgoContext'
import DeleteAllArgos from './DeleteAllArgos'
import ArgoItem from './ArgoItem'
import Pagination from '../../components/UI/pagination/Pagination'
import getDummy from '../../utils/dummy'
import { Loader } from '../Loader'

const ArgosList = ({ argonauts, setArgonauts, page, numPerPage, totalPages, changePage, onDeleteAll }) => {
  const { loading } = useContext(ArgoContext)

	useEffect(() => {
		// fills the Argonauts array with Dummy's to ensure the same indentation from the Pagination
		if(argonauts.length && argonauts.length < numPerPage && page === totalPages) {
			for(let i = argonauts.length; i < numPerPage; i++) {
				setArgonauts([...argonauts, getDummy()])
			}
		}
	}, [argonauts, setArgonauts, numPerPage, page, totalPages])

	const btnBlocker = () => {
		const buttons = document.querySelectorAll('.__btn-blocked')
		for(const btn of buttons) {
			btn.classList.toggle('__button-disabler')
		}
	}

  if (loading) {
    return <Loader />
  }

	if (!loading && !argonauts.length) {
		return (
			<div className="__empty-list">
				<p className="container">La liste de membres de l'équipage est vide ou personne n'a été trouvé</p>
			</div>
		)
	}

	return (
    <div className="container">
      <h5>Membres de l'équipage</h5>
      <table className="centered highlight __argo-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Nom d'argonaut</th>
            <th className="hide-on-small-only">Date d'embarquation</th>
            <th>Sa belle gueule</th>
            <th>
              <DeleteAllArgos onDeleteAll={onDeleteAll} />
            </th>
          </tr>
        </thead>
        <tbody>
          {argonauts.map((argonaut, index) => (
            <ArgoItem
              key={argonaut._id}
              argonaut={argonaut}
              index={(page - 1) * numPerPage + index + 1}
              btnBlocker={btnBlocker}
            />
          ))}
        </tbody>
      </table>
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  )
}

export default ArgosList