import ACTIONS from "./index";
import axios from "axios";
import { userLoading } from "./authAction";




export const getProfile = () => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const profile = await axios.get("/profile/me", config)
        const data = profile.data.profile
        const err = profile.data.err
        dispatch({
            type: ACTIONS.GET_PROFILE_SUCCESS,
            payload: {data, err}
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_PROFILE_FAIL
        })
        console.error(err.response.data)
    }
}

export const addProfile = (profileData) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };

    try {
        const profile = await axios.post("/profile/add",profileData,config )
        dispatch({
            type:ACTIONS.ADD_PROFILE_SUCCESS,
        })
        
    } catch (err) {
        dispatch({
            type: ACTIONS.ADD_PROFILE_FAIL
        })
        console.error(err.response.data)
    }
}

export const addExperience = (expData) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const profile = await axios.put("/profile/experience", expData,config )
        dispatch({
            type: ACTIONS.ADD_PROFILE_EXPERIENCE_SUCCESS,
            payload: profile.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.ADD_PROFILE_EXPERIENCE_FAIL
        })
        console.error(err.response.data)
    }
}

export const deleteExperience = (id) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        await axios.delete(`/profile/experience/${id}`, config)
        dispatch({
            type: ACTIONS.DELETE_PROFILE_EXPERIENCE_SUCCESS
        })
        
        
    } catch (err) {
        dispatch({
            type: ACTIONS.DELETE_PROFILE_EXPERIENCE_FAIL
        })
        console.error(err.response.data)
    }
}

export const addEducation = (expData) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const profile = await axios.put("/profile/education", expData,config )
        dispatch({
            type: ACTIONS.ADD_PROFILE_EDUCATION_SUCCESS,
            payload: profile.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.ADD_PROFILE_EDUCATION_FAIL
        })
        console.error(err.response.data)
    }
}

export const deleteEducation = (id) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        await axios.delete(`/profile/education/${id}`, config)
        dispatch({
            type: ACTIONS.DELETE_PROFILE_EDUCATION_SUCCESS
        })
        
        
    } catch (err) {
        dispatch({
            type: ACTIONS.DELETE_PROFILE_EDUCATION_FAIL
        })
        console.error(err.response.data)
    }
}