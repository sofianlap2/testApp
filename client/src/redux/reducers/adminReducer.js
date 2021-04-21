import ACTIONS from "../actions/index"


const initialState = {
    isLoading: false,
    users: []
};

const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload
            }
        case ACTIONS.GET_ALL_USERS_FAIL:
        case ACTIONS.EDIT_USER_FAIL:
            return {
                ...state,
                isLoading: false
            }
        case ACTIONS.DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: state.users.filter((user) => user._id !== payload)
            }
        case ACTIONS.EDIT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: state.users.map((user) => user._id === payload._id ? { ...user, name:payload.name, email: payload.email, role: payload.role, avatar: payload.avatar } : user)
            }
        default:
            return state;
    }
};
export default adminReducer;