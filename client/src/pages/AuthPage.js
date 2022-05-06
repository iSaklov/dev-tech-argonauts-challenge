import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


export const AuthPage = () => {
	const auth = useContext(AuthContext)
	const message = useMessage()
	const {loading, request, error, clearError} = useHttp()
	const [form, setForm] = useState({
		email: '', 
		password: ''
	})

	useEffect(() => {
		message(error)
		clearError()
	}, [error, message, clearError])

	useEffect(() => {
		window.M.updateTextFields()
	}, [])

	const changeHandler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', {...form})
			message(data.message)
		} catch (e) {}
	}  

	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', {...form})
			auth.login(data.token, data.userId)
		} catch (e) {}
	}

	return (
		<div className="row auth_page">
			<div className="col s6 offset-s3 auth_div">
				<h1>Les Argonautes</h1>
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">Embarquement</span>
						<div>
							<div className="input-field">
							<input
								placeholder="Email"
								id="email"
								type="email"
								name="email"
								className="validate"
								value={form.email}
								onChange={changeHandler}
							/>
							</div>
						</div>
						<div>
							<div className="input-field">
							<input
								placeholder="Mot de passe"
								id="password"
								type="password"
								name="password"
								className="validate"
								value={form.password}
								onChange={changeHandler}
							/>
							</div>
						</div>
					</div>
					<div className="card-action">
						<button
							className="btn yellow _wild"
							onClick={loginHandler}
							disabled={loading}
						>
							Se connecter
						</button>
						<button
							className="btn grey lighten-1 black-text"
							onClick={registerHandler}
							disabled={loading}
						>
							Créer un compte
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}