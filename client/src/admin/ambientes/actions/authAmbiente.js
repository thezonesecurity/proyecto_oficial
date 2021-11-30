import { actionsAmb } from "../contants/actionsAmb";
import { endpointsAmbiente } from "../contants/enPointsAmbiente";

export const authRegisterAmbiente = (authRegisterDataAmb) => {
  console.log(authRegisterDataAmb);
  return (dispatch) => {
    fetch(endpointsAmbiente.registrarAmbiente.url, {
      method: endpointsAmbiente.registrarAmbiente.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterDataAmb),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        console.log("server", serverResponse);
        dispatch(registerDataAmbiente(serverResponse));
      });
  };
};

export const registerDataAmbiente = (response) => {
  return {
    type: actionsAmb.authRegisterAmb,
    payload: response,
  };
};
