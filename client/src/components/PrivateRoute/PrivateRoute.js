import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ component: Component, ...rest }) => {
 
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  } else return <Route  component={Component} {...rest} />;
};

export default PrivateRoute;