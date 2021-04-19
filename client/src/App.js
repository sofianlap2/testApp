import './App.css';
import React, { useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/header/Header';
import { useDispatch, useSelector } from "react-redux"
import { getAuthUser } from "./redux/actions/authAction";
import Home from "./components/body/home/Home"
import Register from "./components/body/auth/register/Register"
import Login from "./components/body/auth/login/Login"
import Dashboard from "./components/body/dashboard/dashboard/Dashboard"
import PrivateRoute from "./components/privateRoute/PrivateRoute"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAuthUser())
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Register} path="/register" exact />
        <Route component={Login} path="/login" exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </Router>
  );
}

export default App;
