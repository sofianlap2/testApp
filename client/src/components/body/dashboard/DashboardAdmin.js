import React from 'react'
import { useSelector } from 'react-redux'

const DashboardAdmin = () => {
const name = useSelector(state => state.userReducer.name)
const avatar = useSelector(state=> state.userReducer.avatar)
const email = useSelector(state=> state.userReducer.email)
    return (
        <div>
            <h1>Hello {name}</h1>
            <img src={avatar} alt="avvatar" />
            <h1>Email {email}</h1>
        </div>
    )
}

export default DashboardAdmin
