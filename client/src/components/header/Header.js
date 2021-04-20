import React from 'react';
import {Link,useHistory} from "react-router-dom"
import { logout } from '../../redux/actions/authAction';
import {useDispatch} from "react-redux"

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logoutSubmit = (e) => {
        e.preventDefault()
        dispatch(logout())
        history.push("/")
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logoutSubmit}>Logout</button>
        </div>
    )
}

export default Header
