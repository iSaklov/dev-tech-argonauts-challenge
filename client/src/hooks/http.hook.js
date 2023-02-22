import { Error } from "mongoose"
import { useState, useCallback } from "react"

export const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
	
		setLoading(true)

		try {
			if (body) {
				body = JSON.stringify(body)
				headers['Content-Type'] = 'application/json'
			}	

			const response = await fetch(url, { method, body, headers })
			const data = await response.json()
			// console.log('response http.hook data : ', data)

			if(!response.ok) {
				throw new Error(data.message || 'Quelque chose a mal tourné')
			}

			return data
		} catch (e) {
			setError(e.message)
			throw e
		} finally {
			setLoading(false)
		}
	}, [])

	const clearError = useCallback(() => setError(null), [])

	return { loading, setLoading, request, error, clearError }
}