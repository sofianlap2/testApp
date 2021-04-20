import ACTIONS from "../actions/index"


const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
    errors: null,
    isAuth: false,

};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.REGISTER_SUCCESS:
        case ACTIONS.LOGIN_SUCCESS:
            localStorage.setItem('token', payload)
            return {
                ...state,
                isLoading: false,
                isAuth: true
            }
        case ACTIONS.GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true
            }
        case ACTIONS.GET_AUTH_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: payload,
                isAuth: false
            }
        case ACTIONS.REGISTER_FAIL:
        case ACTIONS.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case ACTIONS.LOGOUT:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: null,
                errors: null
            }
        
        default:
            return state;
    }
};
export default userReducer;