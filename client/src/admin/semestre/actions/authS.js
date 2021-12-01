import { ActionsSemestre } from "../constants/ActionsSemestre";
import { endPointsS } from "../constants/endPointsS";

export const authRegisterSemestre = (authRegisterSemestreData) => {
  return (dispatch) => {
    fetch("http://localhost:8000/api1.0/semestre/", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(authRegisterSemestreData),
    })
      .then((response) => {
        console.log("response", response);
        response.json();
      })
      .then((data) => {
        console.log("serverRESPONSE", data);
        dispatch(registerS(data));
      });
  };
};
export const registerS = (response) => {
  return {
    type: ActionsSemestre.authRegisterS,
    payload: response,
  };
};
