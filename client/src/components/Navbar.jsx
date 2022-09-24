import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import CatHead from '../components/UI/cat/CatHead'
// import { Navbar, NavItem, Icon } from 'react-materialize'
import M from "materialize-css"

export const Navbar = () => {

	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		navigate('/login')
	}

	useEffect(() => {
		const sidenav = document.querySelector(".sidenav")
		M.Sidenav.init(sidenav, {edge:"right"})
	}, [])

	return (
		// <Navbar
		// 	alignLinks="right"
		// 	brand={
			// <a className="brand-logo" href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="nofollow noopener noreferrer">
			// 	<img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" style={{maxWidth: "96px"}}/>
			// </a>
		// 	}
		// 	centerLogo
		// 	id="mobile-nav"
		// 	menuIcon={<Icon>menu</Icon>}
		// 	options={{
		// 		draggable: true,
		// 		edge: 'right',
		// 		inDuration: 250,
		// 		onCloseEnd: null,
		// 		onCloseStart: null,
		// 		onOpenEnd: null,
		// 		onOpenStart: null,
		// 		outDuration: 200,
		// 		preventScrolling: true
		// 	}}
		// >
		// 	<NavItem className="modal-trigger" href="#addModal">
		// 			Ajout des argonauts
		// 	</NavItem>
		// 	<NavItem to="/login" onClick={logoutHandler}>
		// 		Se deconnecter
		// 	</NavItem>
		// </Navbar>
		<nav>
			<div className="nav-wrapper">
				<a className="brand-logo" href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="nofollow noopener noreferrer">
					<img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" style={{maxWidth: "96px"}}/>
				</a>
				<a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
				<ul className="hide-on-med-and-down">
					<li><a className="modal-trigger" href="#addModal">Ajout des argonauts</a></li>
					<li><a href="/login" onClick={logoutHandler}>Se deconnecter</a></li>
				</ul>
			</div>

			<ul className="sidenav" id="mobile-demo">
				<li><a className="modal-trigger" href="#addModal">Ajout des argonauts</a></li>
				<li><a href="/login" onClick={logoutHandler}>Se deconnecter</a></li>
				<li><CatHead /></li>
			</ul>
		</nav>
	)
}