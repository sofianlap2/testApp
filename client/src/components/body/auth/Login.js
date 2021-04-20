import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Redirect } from 'react-router'
import { login } from '../../../redux/actions/authAction'
import {setAlert} from "../../../redux/actions/alert"

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const errors = useSelector((state)=> state.userReducer.errors)
    const isAuth = useSelector((state)=> state.userReducer.isAuth)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
             dispatch(login({
                email,
                password
            }))
           
        } catch (err) {
            console.error(err)
        }
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
