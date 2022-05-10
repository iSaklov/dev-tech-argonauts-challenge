import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { HomePage } from './pages/HomePage'
import { DetailPage } from './pages/DetailPage'

export const useRoutes = isAuthenticated => {
	if(isAuthenticated) {
		return (
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/detail/:id" element={<DetailPage />} />
				{/* <Navigate to="/create"/> */}
				{/* <Route path="/" exact element={<HomePage />} /> */}
				{/* <Redirect to="/create" /> */}
			</Routes>
		)
	}

	return (
		<Routes>
			<Route path="/" exact element={<AuthPage />} />
			{/* <Route path="*" element={<AuthPage />} /> */}
			{/* <Navigate to="/" /> */}
			{/* <Redirect to="/create" /> */}
		</Routes>
	)
}