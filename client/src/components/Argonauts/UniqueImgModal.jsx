import React, { useEffect } from 'react'
import { UNIQUE_IMG_DB_LIMIT } from '../../constants/constants'
import M from 'materialize-css'

const UniqueImageInfoModal = () => {
  useEffect(() => {
    const modal = document.querySelector('.__unique-img-modal-info')
    M.Modal.init(modal)
  }, [])

  return (
    <div className="__unique-img-modal">
      {/* <!-- Modal Trigger --> */}
      <a className="modal-trigger" href="#modal-info">
        plus d'infos
      </a>

      {/* <!-- Modal Structure --> */}
      <div id="modal-info" className="__unique-img-modal-info">
        <div className="modal-content">
          <p>
            Veuillez noter que notre base de donées est limitée par{' '}
            {UNIQUE_IMG_DB_LIMIT} images uniques.
            <br />
            <br />
            Pour assurer un fonctionnement correct, veuillez d'abord supprimmer
            votre liste d'aurgonautes en appuiyant sur le boutton
            <br />
            <br />
            <button className="btn-floating btn-large __isUniqueImageButton">
              <i className="material-icons">delete_forever</i>
            </button>
            <br />
            <br />
            Afin de ne générer que les images uniques.
            <br />
            <br />
          </p>
          <p className="__warning">
            Ce mode peut gravement ralentir le temps d'exécution d'embarquement.
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat">
            C'est noté
          </button>
        </div>
      </div>
    </div>
  )
}

export default UniqueImageInfoModal
