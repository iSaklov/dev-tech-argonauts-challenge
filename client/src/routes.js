import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { ArgonautsPage } from './pages/ArgonautsPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'

export const useRoutes = isAuthenticated => {
	if(isAuthenticated) {
		return (
			<Routes>
				<Route exact path="/" element={<CreatePage />} />
				<Route exact path="/links" element={<ArgonautsPage />}/>
				<Route path="/detail/:id" element={<DetailPage />} />
				{/* <Navigate to="/create"/> */}
				{/* <Route path="/" exact element={<CreatePage />} /> */}
				{/* <Redirect to="/create" /> */}
			</Routes>
		)
	}

	return (
		<Routes>
			<Route path="/" exact element={<AuthPage />} />
			<Route path="*" element={<AuthPage />} />
			{/* <Route path="*" element={<ErrorPage />} /> */}
			{/* <Navigate to="/" /> */}
			{/* <Redirect to="/create" /> */}
		</Routes>
	)
}