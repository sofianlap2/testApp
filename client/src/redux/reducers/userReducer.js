import ACTIONS from "../actions/index"


  const initialState = {
    isLoading : false,
    errors: null,
    user: null
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.REGISTER_USER:
        case ACTIONS.LOGIN_USER:
        case ACTIONS.GET_PROFILE:
            return {
                ...state,
                isLoading: true
            };
        case ACTIONS.REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload
            };
        case ACTIONS.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload,
            }
        case ACTIONS.GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: payload
            }
        case ACTIONS.REGISTER_USER_FAIL:
        case ACTIONS.LOGIN_USER_FAIL:
        case ACTIONS.GET_PROFILE_FAIL:
            return {
                ...state,
                isLoading: false,
                errors : payload
            } 
        case ACTIONS.LOGOUT_USER: 
            localStorage.removeItem('token')
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: null
            }
      default:
        return state;
    }
  };
  export default userReducer;