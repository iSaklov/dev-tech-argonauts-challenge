import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { Navbar, NavItem, Icon } from 'react-materialize';

export const Navmenu = () => {

	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		navigate('/login')
	}

	return (
		<Navbar
			alignLinks="right"
			brand={
			<a href="https://www.wildcodeschool.com/fr-FR" target="_blank" rel="nofollow noopener noreferrer">
				<img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" style={{maxWidth: "96px"}}/>
			</a>
			}
			centerLogo
			id="mobile-nav"
			menuIcon={<Icon>menu</Icon>}
			options={{
				draggable: true,
				edge: 'right',
				inDuration: 250,
				onCloseEnd: null,
				onCloseStart: null,
				onOpenEnd: null,
				onOpenStart: null,
				outDuration: 200,
				preventScrolling: true
			}}
		>
			<NavItem className="modal-trigger" href="#addModal">
					Ajout des argonauts
			</NavItem>
			<NavItem to="/login" onClick={logoutHandler}>
				Se deconnecter
			</NavItem>
		</Navbar>
	)
}