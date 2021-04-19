import React, { useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from "react-redux"
import { login } from '../../../../redux/actions/authAction'
import { Link, Redirect, useHistory } from "react-router-dom"
import { showErrMsg, showSuccessMsg } from '../../../utils/notification/Notification'


const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const errors = useSelector(state => state.userReducer.errors)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({
            email,
            password
        }))
        history.push("/dashboard")
    }

    if(isAuth) return <Redirect to="/dashboard" />

    return ( 
        <div>
            <h1>Login</h1>
            {errors && showErrMsg(errors)}
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="name">Password</label>
                <input type="password"
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    
    )
}

export default Login
