import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userID: null,
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: action.payload.sign,
        userID: action.payload.user,
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: action.payload, userID: null };
    default:
      return state;
  }
};
