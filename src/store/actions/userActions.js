import { SET_CURRENT_USER } from "./types";

export const setCurrentUserAction = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
