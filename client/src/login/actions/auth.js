import { useState } from "react";
import { ErrorValidacion } from "../../admin/ErrorValidacion";
import { endpointsL } from "../types/endPointsL";
import { types } from "../types/types";
export const authAsync = (email, password) => {
  return (dispatch) => {
    fetch(endpointsL.login.url, {
      method: endpointsL.login.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 300) {
          //qui se agrega un comentario para las vistas
          console.log("2 la credenciales no son validas");
          return;
        }
        //console.log("response", response.json);
        return response.json();

        //el (response.json) es una promesa
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.serverResponse);
          dispatch(auth(data.serverResponse));
          return;
        }
        dispatch(error("Credenciales incorrectas"));
      });
  };
};

export const authLogoutAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      dispatch(logout());
    }, 100);
  };
};

export const auth = (token) => {
  return {
    type: types.authLogin,
    payload: token,
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
/* para simular un usuario logeado esto va en el (authAsync)
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
*/
