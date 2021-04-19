import React from 'react';
import {Link} from "react-router-dom"
import { logout } from '../../redux/actions/authAction';
import {useDispatch, useSelector} from "react-redux"

const Header = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.userReducer.isAuth)

    const handleSubmit = () => {
        dispatch(logout())
    }


    return (
        <header>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                {
                    isAuth ?
                    <div>
                    <button onClick={handleSubmit}>logout</button>
                    <Link to="/dashboard">Dashboard</Link>
                    </div>
                    :
                    <Link to="/register">Register</Link>
                }
                </li>
                    
                    
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
