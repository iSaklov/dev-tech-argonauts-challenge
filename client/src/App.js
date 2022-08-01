import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import { Navmenu as Navbar } from './components/Navbar';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import './styles/App.css'
import './styles/Cat.css'


function App() {
  const {token, login, logout, userId, ready} = useAuth()
	const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        { isAuthenticated && <Navbar />}
          {routes}
        { isAuthenticated && <Footer />}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App
