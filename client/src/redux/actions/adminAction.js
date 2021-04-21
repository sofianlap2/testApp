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
        console.error(err)
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
        console.error(err)
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
        console.log(data)
        dispatch({
            type: ACTIONS.EDIT_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.EDIT_USER_FAIL
        })
        console.error(err)
    }
}