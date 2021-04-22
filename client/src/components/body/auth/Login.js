import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Redirect } from 'react-router'
import { getAuthUser, login } from '../../../redux/actions/authAction'
import {setAlert} from "../../../redux/actions/alert"

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuth = useSelector((state)=> state.authReducer.isAuth)
    
    const handleSubmit = (e) => {
        e.preventDefault()
            dispatch(login({
                email,
                password
            }))
    }
    

    if(isAuth) return <Redirect to="/dashboard" />

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    id="password"
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
