import ACTIONS from "./index";
import axios from "axios";


export const getPosts = () => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    dispatch({
        type: ACTIONS.POST_LOADING
    })
    try {
        const post = await axios.get("/posts/all", config)
        dispatch({
            type: ACTIONS.GET_ALL_POSTS_SUCCESS,
            payload: post.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.GET_ALL_POSTS_FAIL
        })
    }
}

export const addPost = (postData) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const post = await axios.post("/posts/add", postData, config)
        dispatch({
            type: ACTIONS.ADD_POST_SUCCESS,
            payload: post.data
        })
    } catch (err) {
        dispatch({
            type: ACTIONS.ADD_POST_FAIL
        })
    }
}

export const deletePost = (id) => async(dispatch) => {
    const config = {
        headers: {
          'Authorization': localStorage.getItem('token'),
        },
      };
    try {
        const post = await axios.delete(`/posts/delete/${id}`, config)
        dispatch({
            type: ACTIONS.DELETE_POST_SUCCESS,
            payload: id
        })
    } catch (err) {
        dispatch({
            type:ACTIONS.DELETE_POST_FAIL
        })
    }    
}


export const addLike = (id) => async(dispatch) => {
   
    try {
        const post = await axios({ method: 'put', url: `/posts/like/add/${id}`, headers: { 'Authorization': localStorage.getItem('token')} })
        dispatch({
            type: ACTIONS.ADD_LIKE_SUCCESS,
            payload : {id , likes: post.data}
        })
    } catch (err) {
        dispatch({
            type:ACTIONS.ADD_LIKE_FAIL,
        })
        console.error(err.response.data)
    }    
}

export const removeLike = (id) => async(dispatch) => {
   
    try {
        const post = await axios({ method: 'put', url: `/posts/like/remove/${id}`, headers: { 'Authorization': localStorage.getItem('token')} })
        dispatch({
            type: ACTIONS.REMOVE_LIKE_SUCCESS,
            payload : {id , likes: post.data}
        })
    } catch (err) {
        dispatch({
            type:ACTIONS.REMOVE_LIKE_FAIL,
        })
        console.error(err.response.data)
    }    
}
