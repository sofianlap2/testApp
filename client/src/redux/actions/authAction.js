import ACTIONS from "./index";
import axios from "axios";
import {setAlert} from "./alert"

export const userLoading = () => dispatch => {
    dispatch({
        type: ACTIONS.USER_LOADING
    })
}


export const register = (registerData) => async(dispatch) => {
    dispatch(userLoading())

    try {
        const res = await axios.post("/user/register", registerData)
        dispatch({
            type: ACTIONS.REGISTER_SUCCESS,
            payload : res.data.token
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.REGISTER_FAIL,
            payload: err.response.data.msg
        })
    }
}

export const login = (loginData) => async(dispatch) => {
    dispatch(userLoading())

    try {
        const res = await axios.post("/user/login", loginData)
        dispatch({
            type: ACTIONS.LOGIN_SUCCESS,
            payload: res.data.token
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.LOGIN_FAIL,
            payload: err.response.data.msg
        })
        dispatch(setAlert(err.response.data.msg))
    }
}

export const getAuthUser = () => async (dispatch) => {

    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    dispatch(userLoading())

    try {
        const res = await axios.get('/user/current', config)
        dispatch({
            type: ACTIONS.GET_AUTH_USER_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_AUTH_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem('token')
    dispatch({
        type:ACTIONS.LOGOUT
    })
}

