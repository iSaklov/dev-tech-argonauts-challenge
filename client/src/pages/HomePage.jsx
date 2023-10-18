// https://codepen.io/wildcodeschool/pen/LYpoBBN
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ArgoContext } from '../context/ArgoContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Loader from '../components/Loader'
import ArgosList from '../components/Argonauts/ArgosList'
import ArgoModal from '../components/Argonauts/ArgoModal'
import calcTotalPages from '../utils/pages'

export const HomePage = () => {
  const { token } = useContext(AuthContext)
  const { loading, setLoading, request, error, clearError } = useHttp()
  const message = useMessage()
  const [argonauts, setArgonauts] = useState([])
  const [totalArgonauts, setTotalArgonauts] = useState(0)
  const [filter, setFilter] = useState({ query: '', sort: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [numPerPage, setNumPerPage] = useState(10)
  const [boarding, setBoarding] = useState(false)
  const [isUniqueImage, setIsUniqueImage] = useState(false)
  const [renderReady, setRenderReady] = useState(false)

  const fetchArgonauts = useCallback(
    async (currentPage, numPerPage, query, sort) => {
      try {
        console.log('fetchArgonauts')

        const data = await request(
          `/api/argonaut?page=${currentPage}&numperpage=${numPerPage}&search=${query}&sort=${sort}`,
          'GET',
          null,
          {
            Authorization: `Bearer ${token}`
          }
        )
        setArgonauts(data.argonauts)
        setTotalArgonauts(data.size)
      } catch (e) {
        message(e)
      } finally {
        setRenderReady(true)
      }
    },
    [token, request]
  )

  const addArgonaut = async (name, requestUniqueImage = false) => {
    try {
      const data = await request(
        '/api/argonaut/add',
        'POST',
        { name, requestUniqueImage },
        {
          Authorization: `Bearer ${token}`
        }
      )
      changePage(1) // returns to the first page when adding a new element
      fetchArgonauts(currentPage, numPerPage, filter.query, filter.sort)
      message(data.message)
    } catch (e) {}
  }

  const updateArgonaut = async (id, newName) => {
    try {
      const data = await request(
        `api/argonaut/${id}`,
        'PUT',
        { newName },
        {
          Authorization: `Bearer ${token}`
        }
      )
      setArgonauts(
        argonauts.map((argo) =>
          argo._id === id ? { ...argo, name: data.argonaut.name } : argo
        )
      )
      message(data.message)
    } catch (e) {}
  }

  const removeAllArgonauts = async () => {
    try {
      const data = await request(`api/argonaut/`, 'DELETE', null, {
        Authorization: `Bearer ${token}`
      })
      fetchArgonauts(currentPage, numPerPage, filter.query, filter.sort)
      changePage(1)
      message(data.message)
    } catch (e) {}
  }

  const removeArgonaut = async (id) => {
    try {
      const data = await request(`api/argonaut/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`
      })
      fetchArgonauts(currentPage, numPerPage, filter.query, filter.sort)
      message(data.message)
    } catch (e) {}
  }

  const changePage = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    setTotalPages(calcTotalPages(totalArgonauts, numPerPage))
  }, [totalArgonauts, numPerPage])

  useEffect(() => {
    fetchArgonauts(currentPage, numPerPage, filter.query, filter.sort)
  }, [fetchArgonauts, currentPage, numPerPage, filter.query, filter.sort])

  return (
    <ArgoContext.Provider
      value={{
        loading,
        setLoading,
        boarding,
        setBoarding,
        isUniqueImage,
        setIsUniqueImage,
        addArgonaut,
        updateArgonaut,
        removeArgonaut,
        renderReady,
        setRenderReady
      }}
    >
      <main>
        <>
          <ArgoModal />
          {!boarding && renderReady ? (
            <>
              <ArgosList
                argonauts={argonauts}
                setArgonauts={setArgonauts}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setTotalPages={setTotalPages}
                numPerPage={numPerPage}
                setNumPerPage={setNumPerPage}
                totalPages={totalPages}
                changePage={changePage}
                onDeleteAll={removeAllArgonauts}
                totalArgonauts={totalArgonauts}
                filter={filter}
                setFilter={setFilter}
              />
            </>
          ) : boarding ? null : (
            <Loader />
          )}
        </>
      </main>
    </ArgoContext.Provider>
  )
}
