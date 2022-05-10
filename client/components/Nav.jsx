import React, { useState } from 'react'
import GoalForm from './GoalForm'
import { Link } from 'react-router-dom'

function Nav () {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogIn = () => {
    setLoggedIn(true)
  }

  return (
    <>
      <nav className="navigation">
        <div className="container">

          <div className='navbar-start'>
            <a className="navbar-item" href="/">
                <figure className="image columns is-flex">
                  <img className="logo" src="images/logo.png" />
                </figure>
                <p className="app-name">Avocado.onToast ?</p>
            </a>
             <Link to="/goals">
              <div className="navbar-item">Avo Community Posts</div>
            </Link>

            <div className='navbar-end'> 
              {loggedIn
                ? (<div className="navbar-item logout-button">Logout</div>)
                : (
                  <>
                    <div>
                      <div className="navbar-item">
                        <button className="login-button"onClick={handleLogIn}>Login</button>
                        <button className="register-button">Register</button>
                        
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
