import React, { useCallback, useContext, useEffect, useState } from 'react'
// import { ArgoContext } from '../../context/ArgoContext'
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
  setCurrentPage,
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
  const [isOnlyDummies, setIsOnlyDummies] = useState(false)

  const btnBlocker = useCallback(() => {
    if (argonauts.length) {
      const buttons = document.querySelectorAll('.__btn-blocked')
      for (const btn of buttons) {
        btn.classList.toggle('__button-disabler')
      }
    }
  }, [argonauts])

  const getDummiesArray = useCallback(() => {
    const dummiesArray = Array.from(
      { length: numPerPage - argonauts.length },
      () => getDummy()
    )
    return dummiesArray
  }, [argonauts, numPerPage])

  useEffect(() => {
    if (argonauts.length && argonauts.length < numPerPage) {
      setArgonauts([...argonauts, ...getDummiesArray()])
    }
  }, [argonauts, setArgonauts, numPerPage, getDummiesArray])

  useEffect(() => {
    const isOnlyDummiesArray = argonauts.every(
      (argonaut) => argonaut.name === undefined
    )

    if (isOnlyDummiesArray) {
      setIsOnlyDummies(true)
    }
  }, [argonauts])

  useEffect(() => {
    if (isOnlyDummies && totalArgonauts) {
      setCurrentPage(currentPage - 1)
    }
    setIsOnlyDummies(false)
  }, [isOnlyDummies, totalArgonauts, currentPage, setCurrentPage])

  if (!totalArgonauts) {
    return <EmptyList />
  }

  if (isOnlyDummies) {
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
        <table
          className="centered highlight __argo-table"
          style={{ minHeight: '957px', minWidth: '705.5px' }}
        >
          <thead style={{ width: '705.5px' }}>
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
