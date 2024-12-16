import { Fragment, useEffect, useState } from 'react'
import MainHeader from './components/MainHeader/MainHeader'
import Login from './components/Login/Login'
import Home from './components/Home/Home'

import AuthContent from './store/auth-context'

function App() {

  const [loggedIn, setLoggedIn] = useState(() => {
    if (JSON.parse(localStorage.getItem('isLoggedUser')) !== null) {
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged
    } else {
      return false
    }
  })

  console.log(loggedIn)

  useEffect(() => {
    const storedLoggedData = JSON.parse(localStorage.getItem('isLoggedUser'))
    if (storedLoggedData !== null) {
      if (storedLoggedData.isLogged === true) {
        setLoggedIn(true)
      }
    }
  }, [])

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }))
    setLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedUser')
    setLoggedIn(false)
  }

  return (
    <AuthContent.Provider value={
      {
        loggedIn: loggedIn,
        onLogout: logoutHandler
      }
    }>    
      <MainHeader isAuthenticated={loggedIn} onLogout={logoutHandler} />
      <main>
        {!loggedIn && <Login onLogin={loginHandler} />}
        {loggedIn && <Home />}
      </main>
    </AuthContent.Provider>
)
}

export default App