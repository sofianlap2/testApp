import React from 'react';
import {Link} from "react-router-dom"
import { logout } from '../../redux/actions/authAction';
import {useDispatch} from "react-redux"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    )
}

export default Header
