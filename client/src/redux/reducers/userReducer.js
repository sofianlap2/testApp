import ACTIONS from "../actions/index"


const initialState = {
    isLoading: false,
    errors: null,
    user: null,
    isAuth: false,
    token: localStorage.getItem('token'),
    users: []
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.REGISTER_USER:
        case ACTIONS.LOGIN_USER:
        case ACTIONS.GET_PROFILE:
        case ACTIONS.GET_ALL_USERS:
            return {
                ...state,
                isLoading: true
            };
        case ACTIONS.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
                errors: null
            };
        case ACTIONS.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
                errors: null
            }
        case ACTIONS.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload,
                errors: null
            }
        case ACTIONS.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: payload,
                errors: null
            }
        case ACTIONS.GET_ALL_USERS_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: payload
            }
        case ACTIONS.REGISTER_USER_FAIL:
        case ACTIONS.LOGIN_USER_FAIL:
        case ACTIONS.GET_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: payload,
                isAuth: false,
            }
        case ACTIONS.LOGOUT_USER:
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: null,
                errors: null,
                user: null,
                users: []
            }
        default:
            return state;
    }
};
export default userReducer;