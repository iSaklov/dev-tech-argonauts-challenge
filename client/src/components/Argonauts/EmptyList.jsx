import React from 'react'

const EmptyList = () => {
  console.log('EMPTY LIST RENDERED')
  return (
    <div className="__empty-list">
      <p className="container">
        La liste de membres de l'équipage est vide ou personne n'a été trouvé
      </p>
    </div>
  )
}

export default EmptyList
