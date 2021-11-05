import { types } from "../types/types";

export const authAsync = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      if (email === "seminario@gmail.com" && password === "1234") {
        const userdata = {
          id: new Date().getTime(),
          displayName: email,
          photo: "",
        }; //({ id: new Date().getTime(), displayName: email, photo: ""})auth en este auth tiene que benir de una base de datos
        localStorage.setItem("user", JSON.stringify(userdata));
        dispatch(auth(userdata));
      } else {
        dispatch(error("Credenciales Incorrectas"));
      }
    }, 100);
  };
};

export const authLogoutAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem("user");
      dispatch(logout());
    }, 100);
  };
};

export const auth = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: types.authLogout,
    payload: null,
  };
};

export const error = (msn) => {
  return {
    type: types.authError,
    payload: msn,
  };
};
