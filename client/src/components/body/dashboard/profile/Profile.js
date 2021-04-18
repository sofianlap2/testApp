import React , {useEffect} from 'react'
import "./profile.css";

import {useDispatch,useSelector} from "react-redux"
import {Redirect} from "react-router-dom"

import {getProfile} from "../../../../redux/actions/authAction"

const Profile = () => {

    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getProfile())
    }, [dispatch])
    const isLoading = useSelector(state=> state.userReducer.isLoading)
    const user = useSelector(state=> state.userReducer.user)
    const isAuth = useSelector(state=> state.userReducer.isAuth)

    return (
        <div>
        {
            isLoading ? <h5>Please wait ...</h5>
            :
            isAuth ?
            (<div> 
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
