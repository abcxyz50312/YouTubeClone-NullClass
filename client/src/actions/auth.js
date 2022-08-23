import * as api from "../api";
import { setCurrentUser } from "./currentUser";
export const login = (authData) => async (dispatch) => {
  try {
    // console.log(authData);
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  } catch (error) {
    alert(error);
  }
};
