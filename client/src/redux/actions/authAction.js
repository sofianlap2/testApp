
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
            payload: err.response.data
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
            payload: err.response.data
        })
    }
}

export const getProfile = () => async(dispatch) => {
    const token = localStorage.getItem('token')
    const config = {
        headers : {
            Authorization : token
        }
    }
    dispatch({
        type: ACTIONS.GET_PROFILE
    })
    try {
        const profile = await axios.get('/user/current', config)
        dispatch({
            type: ACTIONS.GET_PROFILE_SUCCESS,
            payload: profile.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_PROFILE_FAIL,
            payload: err.response.data
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: ACTIONS.LOGOUT_USER
    })
}