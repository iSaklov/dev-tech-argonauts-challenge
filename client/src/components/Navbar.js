import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Navbar = () => {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const logoutHandler = event => {
		event.preventDefault()
		auth.logout()
		navigate('/')
	}

	return (
		<nav>
			<div className="nav-wrapper">
				{/* https://www.wildcodeschool.com/fr-FR */}
				<a href="/" className="brand-logo center">
					<img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" style={{maxWidth: "96px"}}/>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{/* <li><NavLink to="/">Link One</NavLink></li>
					<li><NavLink to="/">Link Two</NavLink></li> */}
					<li><a href="/" onClick={logoutHandler}>Se deconnecter</a></li>
				</ul>
			</div>
		</nav>
	)
}