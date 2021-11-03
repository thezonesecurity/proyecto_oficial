import { types } from "../types/types";

export const authAsync = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      if (email === "seminario@gmail.com" && password === "1234") {
        dispatch(
          auth({ id: new Date().getTime(), displayName: email, photo: "" }) //auth en este auth tiene que benir de una base de datos
        );
      } else {
        dispatch(error("Credenciales Incorrectas"));
      }
    }, 100);
  };
};
export const auth = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};
export const error = (msn) => {
  return {
    type: types.authError,
    payload: msn,
  };
};
