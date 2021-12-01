import { Actions } from "../constants/Actions";
import { endpointsM } from "../constants/endPointsM";

export const authRegisterMateria = (authRegisterData) => {
  return (dispatch) => {
    fetch(endpointsM.registerMateria.url, {
      method: endpointsM.registerMateria.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterData),
    })
      .then((response) => {
        console.log("response", response);
        response.json();
      })
      .then((data) => {
        dispatch(registerMateria(data));
        console.log("serverResponse", data);
      });
  };
};
export const registerMateria = (response) => {
  return {
    type: Actions.authRegisterM,
    payload: response,
  };
};
