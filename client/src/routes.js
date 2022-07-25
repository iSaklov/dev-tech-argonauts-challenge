import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { HomePage } from './pages/HomePage'

export const useRoutes = isAuthenticated => {
	if(isAuthenticated) {
		return (
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<Navigate to ="/" />} />
				{console.log('isAuthenticated')}
			</Routes>
		)
	}

	return (
		<Routes>
			<Route path="/login" element={<AuthPage />} />
			<Route path="*" element={<Navigate to ="/login" />} />
			{console.log('is non Authenticated')}
		</Routes>
	)
}