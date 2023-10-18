import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import CatHead from '../components/CatHead/CatHead'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [passwordShown, setPasswordShown] = useState(false)

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const togglePassword = (event) => {
    event.preventDefault()
    setPasswordShown(!passwordShown)
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      auth.login(data.token, data.userId)
      message(data.message)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
      message(data.message)
    } catch (e) {}
  }

  return (
    <div className="__auth-page">
      <h1 className="">Les Argonautes</h1>
      <span className="">par iSaklov</span>
      <div className="row">
        <div className="col s12 m8 push-m2">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Embarquement</span>
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s10 offset-m1 m9">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="validate"
                        value={form.email}
                        onChange={changeHandler}
                      />
                      <label
                        htmlFor="email"
                        data-error="wrong"
                        data-success="right"
                      >
                        Email
                      </label>
                    </div>
                    <div className="input-field col s10 offset-m1 m9">
                      <i className="material-icons prefix">fingerprint</i>
                      <input
                        id="password"
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        className="validate"
                        value={form.password}
                        onChange={changeHandler}
                      />
                      {passwordShown ? (
                        <i
                          className="material-icons tiny __icon-password"
                          onClick={togglePassword}
                        >
                          visibility_off
                        </i>
                      ) : (
                        <i
                          className="material-icons tiny __icon-password"
                          onClick={togglePassword}
                        >
                          visibility
                        </i>
                      )}
                      <label htmlFor="password">Mot de passe</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-action row">
              <button
                className="btn waves-effect waves-light col s6 offset-m2 m4 offset-l3 l3"
                onClick={loginHandler}
                // disabled={loading}
              >
                Se connecter
              </button>
              <button
                className="btn waves-effect waves-light col s6 m4 l3"
                onClick={registerHandler}
                // disabled={loading}
              >
                Créer un compte
              </button>
            </div>
          </div>
        </div>
      </div>
      <CatHead />
    </div>
  )
}
