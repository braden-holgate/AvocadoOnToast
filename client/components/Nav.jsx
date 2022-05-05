import React from 'react'

function Nav () {
  return (
    <>
 <div>Login</div>
 <div>Register</div> 
 <div>Logout</div> 
 {/* //We will only ever display a max of 2 of these at a time. If user not logged in, we show Login and Register. If they are logged in, we show Logout. */}
    
    </>
  )
}

export default Nav
