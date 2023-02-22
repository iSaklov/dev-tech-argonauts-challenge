import React from 'react'

const UniqueImgModal = () => {
  const UNIQUE_IMG_DB_LIMIT = 73

  return (
    <div className="__unique-img-modal">
      {/* <!-- Modal Trigger --> */}
      <a className="modal-trigger" href="#modal">
        plus d'infos
      </a>

      {/* <!-- Modal Structure --> */}
      <div id="modal" className="modal">
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
            <a href="#!" className="btn-floating btn-large __uniqueImgButton">
              <i className="material-icons">delete_forever</i>
            </a>
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
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            C'est noté
          </a>
        </div>
      </div>
    </div>
  )
}

export default UniqueImgModal
