import React , {useEffect} from 'react'
import "./dashboard.css";
import {useDispatch,useSelector, useStore} from "react-redux"
import {Redirect,Link} from "react-router-dom"


const Dashboard = () => {

    const isLoading = useSelector(state=> state.userReducer.isLoading)

    return (
        <div>
        {
            isLoading ? <h5>Please wait ...</h5>
            :      
            (<div> 
                <h1>Hello customer welcome to yout dashboard</h1>
                <h1>Name : </h1>
                <h1>Email : </h1>  
                
            </div>)
        }
            <h1>This is your profile page</h1>
        </div>
    )
}

export default Dashboard
