import ACTIONS from "../actions/index"

const initialState = {
    isLoading: false,
    posts: null,
};

function postReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.POST_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: payload
            }
        case ACTIONS.ADD_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, payload]
            }
        case ACTIONS.DELETE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.filter((post) => post._id !== payload)
            }
        case ACTIONS.ADD_LIKE_SUCCESS:
        case ACTIONS.REMOVE_LIKE_SUCCESS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload.id ? { ...post, likes: payload.likes } : post
                ),
                isLoading: false
            }
        case ACTIONS.GET_ALL_POSTS_FAIL:
        case ACTIONS.ADD_POST_FAIL:
        case ACTIONS.DELETE_POST_FAIL:
        case ACTIONS.REMOVE_LIKE_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}

export default postReducer;