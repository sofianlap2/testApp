
import ACTIONS from './index';
import axios from "axios"

export const getAllUsers = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            Authorization : token
        }
    }
    dispatch({
        type: ACTIONS.GET_ALL_USERS
    })
    try {
        const users = await axios.get("/user/allUsers", config)
        dispatch({
            type: ACTIONS.GET_ALL_USERS_SUCCESS,
            payload: users.data
        })
        
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_ALL_USERS_FAIL,
            payload: err.response.data.msg
        })
    }
}