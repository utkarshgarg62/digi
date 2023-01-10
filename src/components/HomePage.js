import React from 'react'
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <NavLink to="/admin-login">Admin Login</NavLink>
        <br></br>
        <NavLink to="/user-login">User Login</NavLink>
    </div>
  )
}

export default HomePage