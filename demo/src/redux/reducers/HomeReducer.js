import {GET_PROGRAMS_OK, GET_PROGRAMS} from '../saga/actionTypes/home';

const INITIAL_STATE = {};

export default (state = {INITIAL_STATE}, action) => {
  switch (action.type) {
    case GET_PROGRAMS_OK:
      return {
        ...state,
        programsList: action.payload,
      };
    default:
      return state;
  }
};
