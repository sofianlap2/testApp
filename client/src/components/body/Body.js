import {Route, Switch} from "react-router-dom"
import React from 'react'
import Home from "./home/Home";
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";
import Profile from "./dashboard/profile/Profile"

const Body = () => {
    return (
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Register} path="/register" exact />
            <Route component={Login} path="/login" exact />
            <Route component={Profile} path="/profile" exact />
        </Switch>
    )
}

export default Body
