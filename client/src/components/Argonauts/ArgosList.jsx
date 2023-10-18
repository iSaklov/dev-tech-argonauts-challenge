import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import getDummy from '../../utils/dummy'
import EmptyList from './EmptyList'
import ArgoFilter from './ArgoFilter'
import ArgoTable from './ArgoTable'
import Pagination from '../UI/Pagination'

const ArgosList = () => {
  const {
    argonauts,
    setArgonauts,
    numPerPage,
    currentPage,
    setCurrentPage,
    totalArgonauts
  } = useContext(ArgoContext)
  const [isOnlyDummies, setIsOnlyDummies] = useState(false)

  const blockButtonsWhileEditing = useCallback(() => {
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

  return (
    <>
      <ArgoFilter />
      <div className="container">
        <h5>Membres de l'équipage</h5>
        <ArgoTable blockButtonsWhileEditing={blockButtonsWhileEditing} />
        <Pagination />
      </div>
    </>
  )
}

export default ArgosList
