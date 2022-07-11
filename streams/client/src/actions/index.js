import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userID) => {
  return {
    type: SIGN_IN,
    payload: { sign: true, user: userID },
  };
};

export const signOut = (userID) => {
  return {
    type: SIGN_OUT,
    payload: false,
  };
};
