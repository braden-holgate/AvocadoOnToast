import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogIn = () => {
    setLoggedIn(true)
  }

  return (
    <>
      <nav className="navigation navbar">
        <div className="container">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              <figure className="image columns is-flex">
                <img className="logo" src="/images/Logo.png" />
              </figure>
              <p className="app-name">Avocado.onToast ?</p>
            </a>
          </div>

          <div className="navbar-end">
            <Link to="/goals">
              <button className="navbar-item avo-goal-button">
                Avo Community Posts
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
