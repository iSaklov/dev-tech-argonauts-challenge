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
			<div class="nav-wrapper">
			<a href="/" class="brand-logo center">WILD CODE SCHOOL</a>
			<ul id="nav-mobile" class="left hide-on-med-and-down">
				<li><NavLink to="/create">Create</NavLink></li>
				<li><NavLink to="/links">Links</NavLink></li>
				<li><a href="/" onClick={logoutHandler}>Se deconnecter</a></li>
			</ul>
			</div>
		</nav>
	)
}