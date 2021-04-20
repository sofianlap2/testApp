import React, {useEffect} from 'react';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getAuthUser} from "./redux/actions/authAction"
import Login from './components/body/auth/Login';
import Register from './components/body/auth/Register';
import Home from "./components/body/home/Home";
import Header from "./components/header/Header"
import Alert from "./components/utils/notification/Alert";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Dashboard from './components/body/dashboard/Dashboard';

const App = () => {
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [])

  
  return (
    <Router>
    <Header />
    <Alert />
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={Register} path="/register" exact/>
        <Route component={Login} path="/login" exact/>
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
      </Switch>
    </Router>
  )
}

export default App
