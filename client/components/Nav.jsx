import React, { useState } from 'react'

function Nav () {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogIn = () => {
    setLoggedIn(true)
  }

  return (
    <>
      <h1>Money or Life</h1>

      <div>
        {loggedIn
          ? (<div>Logout</div>)
          : (
            <>
              <div onClick={handleLogIn}>Login</div>
              <div>Register</div>
            </>
          )}
      </div>

      {/* //We will only ever display a max of 2 of these at a time. If user not logged in, we show Login and Register. If they are logged in, we show Logout. */}

    </>
  )
}

export default Nav
