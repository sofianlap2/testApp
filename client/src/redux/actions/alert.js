import { v4 as uuidv4 } from 'uuid';
import ACTIONS from "./index"

export const setAlert = (msg, timeout = 3000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: ACTIONS.SET_ALERT,
    payload: { msg, id }
  });

  setTimeout(() => dispatch({ type: ACTIONS.REMOVE_ALERT, payload: id }), timeout);
};