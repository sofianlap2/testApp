import React from 'react';
import {Link} from "react-router-dom"
import { logout } from '../../redux/actions/authAction';
import {useDispatch, useSelector} from "react-redux"

const Header = () => {

    const dispatch = useDispatch()
    const token = useSelector(state => state.userReducer.token)

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
                    token ?
                    <div>
                    <button onClick={handleSubmit}>logout</button>
                    <Link to="/profile">Profile</Link>
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
