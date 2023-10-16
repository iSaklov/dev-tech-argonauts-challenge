import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import CatHead from '../components/UI/cat/CatHead'
import AnimatedLogo from './AnimatedLogo'
import M from 'materialize-css'

const Navbar = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    navigate('/login')
  }

  useEffect(() => {
    const sidenav = document.querySelector('.sidenav')
    M.Sidenav.init(sidenav, { edge: 'right' })
  }, [])

  return (
    <nav>
      <div className="nav-wrapper">
        <AnimatedLogo />
        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="hide-on-med-and-down">
          <li>
            <a className="modal-trigger" href="#addModal">
              Ajout des argonauts
            </a>
          </li>
          <li>
            <a href="/login" onClick={logoutHandler}>
              Se deconnecter
            </a>
          </li>
        </ul>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a className="modal-trigger sidenav-close" href="#addModal">
            Ajout des argonauts
          </a>
        </li>
        <li>
          <a className="sidenav-close" href="/login" onClick={logoutHandler}>
            Se deconnecter
          </a>
        </li>
        <li>
          <CatHead />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
