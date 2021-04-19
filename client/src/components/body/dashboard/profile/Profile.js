import React , {useEffect} from 'react'
import "./profile.css";

import {useDispatch,useSelector, useStore} from "react-redux"
import {Redirect,Link} from "react-router-dom"

import {getProfile} from "../../../../redux/actions/authAction"
import {getAllUsers} from "../../../../redux/actions/adminAction"

const Profile = () => {

    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getProfile())
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllUsers())
     }, [dispatch])
    const isLoading = useSelector(state=> state.userReducer.isLoading)
    const user = useSelector(state=> state.userReducer.user)
    const isAuth = useSelector(state=> state.userReducer.isAuth)
    const users = useSelector(state=> state.userReducer.users)

    return (
        <div>
        {
            isLoading ? <h5>Please wait ...</h5>
            :
            isAuth ?
            user.role == 1 ?
            (<div>
            <h1>Hello admin welcome to your dashboard</h1> 
            <h1>Name : {user.name}</h1>
            <h1>Email : {user.email}</h1> 
            {users.map(oneuser => <h1>{oneuser.name}</h1>)} 
            </div>)
            :
            (<div> 
                <h1>Hello customer welcome to yout dashboard</h1>
                <h1>Name : {user.name}</h1>
                <h1>Email : {user.email}</h1>  
                <img src={user.avatar} alt="avatar"></img>
            </div>)
            :
            <Redirect to="/login" />
        }
            <h1>This is your profile page</h1>
        </div>
    )
}

export default Profile
