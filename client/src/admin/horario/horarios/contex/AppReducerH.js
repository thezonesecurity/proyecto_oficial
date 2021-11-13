import { ActionsH } from "../constants/ActionsH";
export const AppReducerH = (stateH, actionH) => {
  //console.log("reducer", action);
  switch (actionH.type) {
    case ActionsH.ADD_FORM_H: {
      return [...stateH, actionH.payload];
    }
    case ActionsH.REMOVE_FORM_H: {
      return stateH.filter((item) => item.id !== actionH.payload);
    }
    case ActionsH.EDDIT_FORM_H: {
      return;
    }
    default: {
      return stateH;
    }
  }
};
