
import ACTIONS from './index';
import axios from "axios"


export const register = (formdata) => async (dispatch) => {
    dispatch({
        type: ACTIONS.REGISTER_USER
    })
    try {
        const regUser = await axios.post("/user/register", formdata)
        dispatch({
            type: ACTIONS.REGISTER_USER_SUCCESS,
            payload: regUser.data
        })
        
    } catch (err) {
        dispatch({
            type: ACTIONS.REGISTER_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}

export const login = (loginData) => async(dispatch) => {
    
    dispatch({
        type: ACTIONS.LOGIN_USER
    })
    try {
        const regUser = await axios.post("/user/login", loginData)
        localStorage.setItem('token', regUser.data.token)
        dispatch({
            type: ACTIONS.LOGIN_USER_SUCCESS,
            payload: regUser.data
        })
        
    } catch (err) {
        dispatch({
            type: ACTIONS.LOGIN_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}

export const getAuthUser = () => async(dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            Authorization : token
        }
    }
    dispatch({
        type: ACTIONS.GET_AUTH_USER
    })
    try {
        const authUser = await axios.get('/user/current', config)
        dispatch({
            type: ACTIONS.GET_AUTH_USER_SUCCESS,
            payload: authUser.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_AUTH_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}


export const logout = () => dispatch => {
    dispatch({
        type: ACTIONS.LOGOUT_USER
    })
}