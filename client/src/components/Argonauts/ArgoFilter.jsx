import React from 'react'
import MyInput from '../UI/MyIput'
import MySelect from '../UI/MySelect'

const ArgoFilter = ({ filter, setFilter, numPerPage, setNumPerPage }) => {
		const clearInput = () => {
      setFilter({ ...filter, query: '' })
    }

  return (
    <div className="row container __argo-filter">
      <div className="input-field col s6 m4">
        <MyInput
          clearInput={clearInput}
          type="search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          label="Recherche"
          icon="clear"
        />
      </div>
      <div className="col s6 m4 offset-l2 l3">
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
          options={[
            { value: '', name: 'plus récents' },
            { value: 'name', name: 'nom' },
            { value: 'date', name: 'date croissante' },
          ]}
          label="Trier par"
        />
      </div>
      <div className="col m4 l3 hide-on-small-only">
        <MySelect
          value={numPerPage}
          onChange={(value) => setNumPerPage(value)}
          options={[
            { value: 10, name: '10' },
            { value: 25, name: '25' },
            { value: 50, name: '50' },
          ]}
          label="Nombre par page"
        />
      </div>
    </div>
  )
}

export default ArgoFilter
