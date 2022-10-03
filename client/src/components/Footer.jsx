import React from "react"
import cat from "../img/unicorn-cat.webp"

export const Footer = () => {
	return (
		<footer>
  		<p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
			<p>Révisé par iSaklov à Paris 2022. Tous les droits sont résérvés ©</p>
			<img src={cat} alt="un chaton-licorne rose" />
		</footer>
	)
}