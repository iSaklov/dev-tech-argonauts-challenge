import React, { useCallback, useContext, useEffect } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import { calcTotalPages } from '../../utils/pages'
import getDummy from '../../utils/dummy'
import EmptyList from './EmptyList'
import ArgoFilter from './ArgoFilter'
import DeleteAllArgos from './DeleteAllArgos'
import ArgoItem from './ArgoItem'
import Pagination from '../../components/UI/pagination/Pagination'

const ArgosList = ({
  argonauts,
  setArgonauts,
  currentPage,
  numPerPage,
  setNumPerPage,
  filter,
  setFilter,
  totalPages,
  setTotalPages,
  changePage,
  onDeleteAll,
  totalArgonauts
}) => {
  const { loading } = useContext(ArgoContext)

  const btnBlocker = () => {
    const buttons = document.querySelectorAll('.__btn-blocked')
    for (const btn of buttons) {
      btn.classList.toggle('__button-disabler')
    }
  }

  const getDummiesArray = useCallback(() => {
    const dummiesArray = Array.from(
      { length: numPerPage - argonauts.length },
      () => getDummy()
    )
    return dummiesArray
  }, [argonauts, numPerPage])

  // fills the Argonauts array with Dummy's to ensure the same indentation for the Pagination component
  useEffect(() => {
    console.log('argonauts', argonauts)
    if (argonauts.length && argonauts.length < numPerPage) {
      const isAllDummies = argonauts.every(
        (argonaut) => argonaut.name === undefined
      )
      setArgonauts([...argonauts, ...getDummiesArray()])
      if (isAllDummies && currentPage !== 1) {
        const newTotalPages = calcTotalPages(totalArgonauts, numPerPage)
        setTotalPages(newTotalPages)
        changePage(newTotalPages - 1)
        console.log('newTotalPages', newTotalPages)
      } else if (isAllDummies) {
        setArgonauts([])
      }
    }
  }, [
    argonauts,
    setArgonauts,
    currentPage,
    numPerPage,
    totalArgonauts,
    setTotalPages,
    changePage,
    getDummiesArray
  ])

  if (!argonauts.length) {
    return <EmptyList />
  }

  return (
    <>
      <ArgoFilter
        filter={filter}
        setFilter={setFilter}
        numPerPage={numPerPage}
        setNumPerPage={setNumPerPage}
      />
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
                index={(currentPage - 1) * numPerPage + index + 1}
                btnBlocker={btnBlocker}
              />
            ))}
          </tbody>
        </table>
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          changePage={changePage}
        />
      </div>
    </>
  )
}

export default ArgosList
