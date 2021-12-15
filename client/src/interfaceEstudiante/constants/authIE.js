import { ActionsIE } from "./ActionsIE";

import { endPointsIE } from "./endPointsIE";

export const authRegisterIE = (authRegisterDataIE) => {
  console.log(authRegisterDataIE);
  return (dispatch) => {
    fetch(endPointsIE.registrarIEstudiante.url, {
      method: endPointsIE.registrarIEstudiante.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterDataIE),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        console.log("server", serverResponse);
        dispatch(registerDataIE(serverResponse));
      });
  };
};

export const registerDataIE = (response) => {
  return {
    type: ActionsIE.authRegisterIE,
    payload: response,
  };
};
