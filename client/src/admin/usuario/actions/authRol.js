import { endpointsD } from "../types/endPointsD";
import { typesD } from "../types/typesD";

export const authRegisterROl = (authRegisterDataRol) => {
  console.log(authRegisterDataRol);
  return (dispatch) => {
    fetch(endpointsD.registerRol.url, {
      method: endpointsD.registerRol.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterDataRol),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        console.log("server", serverResponse);
        dispatch(registerDataROL(serverResponse));
      });
  };
};

export const registerDataROL = (response) => {
  return {
    type: typesD.authRegisterRol,
    payload: response,
  };
};
