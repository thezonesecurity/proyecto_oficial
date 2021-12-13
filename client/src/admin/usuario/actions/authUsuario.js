import { endpointsD } from "../types/endPointsD";
import { typesD } from "../types/typesD";

export const authRegister = (authRegisterData) => {
  console.log(authRegisterData);

  return (dispatch) => {
    fetch(endpointsD.register.url, {
      method: endpointsD.register.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterData),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        console.log(serverResponse);
        dispatch(register(serverResponse));
      });
  };
};
export const register = (response) => {
  return {
    type: typesD.authRegister,
    payload: response,
  };
};
export const error = (msn) => {
  return {
    type: typesD.authError,
    payload: msn,
  };
};

/*export const authUsuario = (
  nombre,
  apellidos,
  ci,
  email,
  direccion,
  telefono,
  carga_horaria,
  roles,
  password,
  repassword
) => {
  return (dispatch) => {
    setTimeout(() => {
      if (email === "seminario@gmail.com" && password === "1234") {
        const userdata = {
          id: new Date().getTime(),
          displayName: email,
          photo: "",
        }; //({ id: new Date().getTime(), displayName: email, photo: ""})auth en este auth tiene que benir de una base de datos
        localStorage.setItem("user", JSON.stringify(userdata));
        dispatch(authDocente(userdata));
      } else {
        dispatch(error("Credenciales Incorrectas"));
      }
    }, 100);
  };
};*/
