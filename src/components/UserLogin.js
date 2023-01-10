import React from 'react'
import { NavLink } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <h1>User Login</h1>
      <form>
        <div >
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div >
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <NavLink to="/user-register">User Registration</NavLink>
    </div>
  )
}

export default User