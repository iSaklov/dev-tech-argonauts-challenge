import React, { useContext } from 'react'
import { ArgoContext } from '../../context/ArgoContext'
import DeleteAllArgos from './DeleteAllArgos'
import ArgoItem from './ArgoItem'

const ArgoTable = ({ blockButtonsWhileEditing }) => {
  const { argonauts, currentPage, numPerPage } = useContext(ArgoContext)

  return (
    <table
      className="centered highlight __argo-table"
      //TODO fix this in css
      // style={{ minHeight: '957px' }}
    >
      <thead>
        <tr>
          <th>№</th>
          <th>Nom d'argonaut</th>
          <th className="hide-on-small-only">Date d'embarquation</th>
          <th>Sa belle gueule</th>
          <th>
            <DeleteAllArgos />
          </th>
        </tr>
      </thead>
      <tbody>
        {argonauts.map((argonaut, index) => (
          <ArgoItem
            key={argonaut._id}
            argonaut={argonaut}
            index={(currentPage - 1) * numPerPage + index + 1}
            blockButtonsWhileEditing={blockButtonsWhileEditing}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ArgoTable
