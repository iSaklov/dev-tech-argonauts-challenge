import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import { Loader } from '../Loader'
import EmptyList from './EmptyList'
import DeleteAllArgos from './DeleteAllArgos'
import ArgoItem from './ArgoItem'
import Pagination from '../../components/UI/pagination/Pagination'
import getDummy from '../../utils/dummy'

const ArgosList = ({
  argonauts,
  setArgonauts,
  page,
  numPerPage,
  totalPages,
  changePage,
  onDeleteAll,
}) => {
  const { loading } = useContext(ArgoContext)

  const btnBlocker = () => {
    const buttons = document.querySelectorAll('.__btn-blocked')
    for (const btn of buttons) {
      btn.classList.toggle('__button-disabler')
    }
  }

  const dummiesArray = useCallback(() => {
    const dummies = []
    for (let i = argonauts.length; i < numPerPage; i++) {
      dummies.push(getDummy())
    }
    return dummies
  }, [argonauts, numPerPage])

  // fills the Argonauts array with Dummy's to ensure the same indentation from the Pagination component
  useEffect(() => {
    if (
      argonauts.length &&
      argonauts.length < numPerPage &&
      page === totalPages
    ) {
      setArgonauts([...argonauts, ...dummiesArray()])
    }
    if (!loading) {
      console.log('!loading')
      // console.log('useEffect', !!argonauts)
      // console.log('DATA', !!data)
      // console.log('!argonauts.length', argonauts.length)
    }
    if (loading) {
      console.log('loading')
      console.log('data', !argonauts)
    }
  }, [
    argonauts,
    setArgonauts,
    numPerPage,
    page,
    totalPages,
    loading,
    dummiesArray,
  ])

  // if (loading && !data) {
  //   return <Loader />
  // }
  if (loading && !argonauts) {
    return <Loader />
  }

  if (!argonauts.length) {
    return <EmptyList />
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
              // key={index}
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
