import ACTIONS from "../actions/index"


const initialState = {
    isLoading: false,
    errors: null,
    user: null,
    isAuth: false,
    authErr: null,
    token: localStorage.getItem('token'),
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.REGISTER_USER:
        case ACTIONS.LOGIN_USER:
        case ACTIONS.GET_AUTH_USER:
            return {
                ...state,
                isLoading: false
            }
        case ACTIONS.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload,
                errors: null
            };

        case ACTIONS.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload,
                errors: null,
                isAuth: true
            }
        case ACTIONS.GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: payload,
                errors: null
            }

        case ACTIONS.REGISTER_USER_FAIL:
        case ACTIONS.LOGIN_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                errors: payload,
                isAuth: false,
            }
        case ACTIONS.GET_AUTH_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                authErr: payload,
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

            }
        default:
            return state;
    }
};
export default userReducer;