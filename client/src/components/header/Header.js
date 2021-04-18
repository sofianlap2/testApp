import React from 'react';
import {Link} from "react-router-dom"
import { logout } from '../../redux/actions/authAction';
import {useDispatch} from "react-redux"

const Header = () => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(logout())
    }


    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={handleSubmit}>logout</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header
