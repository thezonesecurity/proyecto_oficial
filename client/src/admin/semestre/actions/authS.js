import { ActionsSemestre } from "../constants/ActionsSemestre";
import { endPointsS } from "../constants/endPointsS";

export const authRegisterSemestre = (authRegisterSemestreData) => {
  return (dispatch) => {
    fetch(endPointsS.registrarSemestre.url, {
      method: endPointsS.registrarSemestre.method,
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(authRegisterSemestreData),
    })
      .then((response) => response.json())
      .then(({ severResponse }) => {
        console.log("serverRESPONSE", severResponse);
        dispatch(registerS(severResponse));
      });
  };
};
export const registerS = (response) => {
  return {
    type: ActionsSemestre.authRegisterS,
    payload: response,
  };
};
