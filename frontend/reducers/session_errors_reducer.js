import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
    case CLOSE_MODAL:  
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;