import React from 'react';
import { useSelector } from "react-redux"
import { Redirect } from 'react-router';


const Dashboard = () => {

    const role = useSelector((state) => state.userReducer.role)
    const isLoading = useSelector((state) => state.userReducer.isLoading)
    const name = useSelector(state => state.userReducer.name)
    const avatar = useSelector(state => state.userReducer.avatar)
    const email = useSelector(state => state.userReducer.email)
    if (isLoading) {
        return <h1>Please wait ...</h1>
    }
    else if (role === 1) {
        return <Redirect to="dashboard_admin" />
    }

    return (
        <div>
            <h1>Hello {name}</h1>
            <img src={avatar} alt="avvatar" />
            <h1>Email {email}</h1>
        </div>
    )
}

export default Dashboard
