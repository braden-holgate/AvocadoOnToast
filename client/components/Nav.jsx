import React, { useState } from 'react'

function Nav () {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogIn = () => {
    setLoggedIn(true)
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">

          <div className='navbar-start'>
              <a className="navbar-item">
                <p className="is-size-4">Money or Life</p>
              </a>
            <div className='navbar-end'> 
              {loggedIn
                ? (<div className="navbar-item button">Logout</div>)
                : (
                  <>
                    <div>
                      <div className="navbar-item">
                        <div className="button"onClick={handleLogIn}>Login</div>
                        <div className="button">Register</div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </nav>

      {/* <h1>Money or Life</h1>

      <div>
        {loggedIn
          ? (<div>Logout</div>)
          : (
            <>
              <div onClick={handleLogIn}>Login</div>
              <div>Register</div>
            </>
          )}
      </div> */}
    </>
  )
}

/* ---------Jessie's Test----------- */

//     {/* <div className="navbar-start">
//       <Link to='/lostPets' className='navbar-item is-large'>
//                 Lost
//       </Link>
//       <Link to='/foundPets' className='navbar-item is-large'>
//                 Found
//       </Link> */}

//       <div className="navbar-item">
//         {/* <a className="navbar-link">Home</a>
//                     <a className="navbar-link">Blog</a> */}
//         {/*
//                 <div className="navbar-dropdown">
//                   <a className="navbar-item">Source</a>
//                   <a className="navbar-item">Contact us</a>
//                </div> */}
//       </div>

//       {/* <div className="navbar-end">
//               {auth.isAuthenticated ? (
//                 <>
//                   <Link to="/" className="navbar-item is-large" onClick={logout}>
//                 Logout
//                   </Link>
//                   <Link to="" className="navbar-item is-large">xxxxxxxxxxx</Link>
//                   <Link to="" className="navbar-item is-large">xxxxxxxxxxx</Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     onClick={handleLogIn}
//                     className="navbar-item is-large"
//                     to="/login"
//                   >
//                   Login
//                   </Link>
//                   <Link
//                     onClick={toggleBurger}
//                     className="navbar-item"
//                     to="/register"
//                   >
//                   Register
//                   </Link>

//                 </>
//               )}
//             </div> */}

//     </div>
//

/* //We will only ever display a max of 2 of these at a time. If user not logged in, we show Login and Register. If they are logged in, we show Logout. */

export default Nav
