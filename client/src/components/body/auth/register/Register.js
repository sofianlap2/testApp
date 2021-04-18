
import React, {useState} from 'react'
import './register.css'
import {Link,Redirect} from "react-router-dom"
import {register} from "../../../../redux/actions/authAction"
import {useDispatch,useSelector} from "react-redux"

const Register = () => {

    const isLoading = useSelector(state => state.userReducer.isLoading)
    const user = useSelector(state => state.userReducer.user)

    const dispatch = useDispatch()

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({
            name,
            email,
            password
        }))
    }

    return (
        <div>
        {isLoading ? (<h5>Please wait ....</h5>)
            :
            user ? <Redirect to="/login" />
            :
            (<div>
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

            <p>Already a user? <Link to="/login">Login</Link></p>
        </div>)
        }  
        </div>
    )
}

export default Register
