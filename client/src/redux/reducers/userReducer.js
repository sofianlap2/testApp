import ACTIONS from "../actions/index"


const initialState = {
    profile: null,
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_PROFILE_SUCCESS:
            return {
                ...state,
            }
        case ACTIONS.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: payload.data,
                isProfile: payload.err
            }
        case ACTIONS.ADD_PROFILE_FAIL:
        case ACTIONS.GET_PROFILE_FAIL:
                return {
                    ...state,
                    profile: null
                }
        default:
            return state;
    }
};
export default userReducer;