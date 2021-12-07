import { ActionsH } from "./ActionsH";
import { endpointsAMD } from "./endPointsAMD";

export const authRegisterAMD = (authRegisterDataAMD) => {
  console.log(authRegisterDataAMD);
  return (dispatch) => {
    fetch(endpointsAMD.createAMD.url, {
      method: endpointsAMD.createAMD.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authRegisterDataAMD),
    })
      .then((response) => response.json())
      .then(({ serverResponse }) => {
        console.log("server", serverResponse);
        dispatch(registerDataAMD(serverResponse));
      });
  };
};

export const registerDataAMD = (response) => {
  return {
    type: ActionsH.authRegisterAMD,
    payload: response,
  };
};
