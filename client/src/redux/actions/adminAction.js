import ACTIONS from "./index";
import axios from "axios";
import { userLoading } from "./authAction";


export const getAllUsers = () => async(dispatch) => {
    dispatch(userLoading())
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const users = await axios.get('/user/allUsers', config)
        dispatch({
            type: ACTIONS.GET_ALL_USERS_SUCCESS,
            payload : users.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_ALL_USERS_FAIL
        })
        
    }
}

export const deleteUser = (id) => async(dispatch) => {

    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const user = await axios.delete(`/user/delete/${id}`, config)
        dispatch({
            type: ACTIONS.DELETE_USER_SUCCESS,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.DELETE_USER_FAIL
        })
        
    }
}


export const editUser = (id, newData) => async(dispatch) => {

    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const user = await axios.put(`/user/edit/${id}`,newData, config)
        const data = user.data
        
        dispatch({
            type: ACTIONS.EDIT_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.EDIT_USER_FAIL
        })
        
    }
}

export const getAllProfiles = () => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const profiles = await axios.get("/profile/all",config)
        dispatch({
            type: ACTIONS.GET_ALL_PROFILES_SUCCESS,
            payload: profiles.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_ALL_PROFILES_FAIL
        })
        
    }
}

export const delProfileandUser = (id) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const profile = await axios.delete(`profile/delete/${id}`, config)
        dispatch({
            type: ACTIONS.DELETE_PROFILE_AND_USER_SUCCESS,
            payload: id
        })
        
    } catch (err) {
        dispatch({
            type: ACTIONS.DELETE_PROFILE_AND_USER_FAIL
        })
        
    }
}
