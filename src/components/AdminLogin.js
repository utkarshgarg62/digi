import React from 'react'
import { NavLink } from 'react-router-dom'


const AdminPage = () => {
    return (
        <div>
            <h1>Admin Login</h1>
            <form>
                <div >
                    <label>Admin Name </label>
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
            <NavLink to="/admin-register">Admin Registration</NavLink>
        </div>
    )
}

export default AdminPage