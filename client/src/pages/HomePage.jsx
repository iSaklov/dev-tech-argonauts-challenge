// https://codepen.io/wildcodeschool/pen/LYpoBBN
import React, { useState, useEffect, useContext, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ArgoContext } from '../context/ArgoContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
// import { Loader } from '../components/Loader'
import ArgoFilter from '../components/Argonauts/ArgoFilter'
import ArgosList from '../components/Argonauts/ArgosList'
import ArgoModal from '../components/Argonauts/ArgoModal'
import { getTotalPages } from '../utils/pages'

export const HomePage = () => {
  const { token } = useContext(AuthContext)
  const { loading, setLoading, request, error, clearError } = useHttp()
  const message = useMessage()
  const [argonauts, setArgonauts] = useState([])
  const [filter, setFilter] = useState({ query: '', sort: '' })
  const [page, setPage] = useState(1)
  const [totalArgonauts, setTotalArgonauts] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [numPerPage, setNumPerPage] = useState(10)
  const [boarding, setBoarding] = useState(false)
  const [uniqueImg, setUniqueImg] = useState(false)
  // necessary to avoid EMPTY LIST rendering since the initial argonauts state [ ]
  const [renderReady, setRenderReady] = useState(false)

  const fetchArgonauts = useCallback(
    async (page, numPerPage, query, sort) => {
      try {
        console.log('FECTHING')
        setRenderReady(false)
        const data = await request(
          `/api/argonaut?page=${page}&numperpage=${numPerPage}&search=${query}&sort=${sort}`,
          'GET',
          null,
          {
            Authorization: `Bearer ${token}`,
          }
        )
        setArgonauts(data.argonauts)
        setTotalArgonauts(data.size)
      } catch (e) {
      } finally {
        setRenderReady(true)
      }
    },
    [token, request]
  )

  const addArgonaut = async (name, uniqueImg = false) => {
    try {
      const data = await request(
        '/api/argonaut/add',
        'POST',
        { name, uniqueImg },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      changePage(1) // returns to the first page when adding a new element
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
          Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
      })
      changePage(1)
      message(data.message)
    } catch (e) {}
  }

  const removeArgonaut = async (id) => {
    try {
      const data = await request(`api/argonaut/${id}`, 'DELETE', null, {
        Authorization: `Bearer ${token}`,
      })
      changePage(page)
      message(data.message)
    } catch (e) {}
  }

  const changePage = useCallback(
    (page) => {
      setPage(page)
      fetchArgonauts(page, numPerPage, filter.query, filter.sort)
    },
    [numPerPage, filter.query, filter.sort, fetchArgonauts]
  )

  const pagination = useCallback(() => {
    console.log('PAGINATION')
    setTotalPages(getTotalPages(totalArgonauts, numPerPage))
    console.log('TOTAL PAGES', totalPages)
    if (page > totalPages && page !== 1) {
      setPage(page - 1)
    }
  }, [totalArgonauts, numPerPage, page, totalPages])

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    fetchArgonauts(page, numPerPage, filter.query, filter.sort)
    pagination()
  }, [page, numPerPage, filter.query, filter.sort, fetchArgonauts, pagination])

  return (
    <ArgoContext.Provider
      value={{
        loading,
        setLoading,
        boarding,
        setBoarding,
        uniqueImg,
        setUniqueImg,
        addArgonaut,
        updateArgonaut,
        removeArgonaut,
        renderReady,
        setRenderReady,
      }}
    >
      <main>
        <>
          <ArgoModal />
          {!boarding && (
            <>
              <ArgoFilter
                filter={filter}
                setFilter={setFilter}
                numPerPage={numPerPage}
                setNumPerPage={setNumPerPage}
              />
              <ArgosList
                argonauts={argonauts}
                setArgonauts={setArgonauts}
                page={page}
                numPerPage={numPerPage}
                totalPages={totalPages}
                changePage={changePage}
                onDeleteAll={removeAllArgonauts}
              />
            </>
          )}
        </>
      </main>
    </ArgoContext.Provider>
  )
}
