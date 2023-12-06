import React from 'react'
import cat from '../img/unicorn-cat.webp'
import linkedinIcon from '../img/icons/linkedin-icon.svg'
import instagramIcon from '../img/icons/instagram-icon.svg'
import githubIcon from '../img/icons/github-icon.svg'

const Footer = () => {
  return (
    <footer className="">
      <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC.</p>
      <p>Révisé par iSaklov à Paris 2023. Aucun droit n'est résérvé ©</p>
      <div className="__footer-links">
        <a
          href="https://www.linkedin.com/in/aleh-smaliakou/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="linkedin-logo"
            className="__footer-link __bg-color-filter"
          />
        </a>
        <a
          href="https://www.instagram.com/ivansaklov/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="instagram-logo"
            className="__footer-link __bg-color-filter"
          />
        </a>
        <a
          href="https://github.com/iSaklov"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="github-logo"
            className="__footer-link __bg-color-filter"
          />
        </a>
      </div>
      <img src={cat} alt="un chaton-licorne rose" />
    </footer>
  )
}

export default Footer
