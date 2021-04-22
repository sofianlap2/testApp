import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { register } from "../../../redux/actions/authAction"
import "./register.css"

const Register = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.authReducer.isAuth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({
            name,
            email,
            password
        }))
    }

    if (isAuth) return <Redirect to="/dashboard" />

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder="Please enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
