import { ActionsH } from "../constants/ActionsH";
export const AppReducerH = (state, action) => {
  //console.log("reducer", action);
  switch (action.type) {
    case ActionsH.ADD_FORM_H: {
      return [...state, action.payload];
    }
    case ActionsH.REMOVE_FORM_H: {
      return state.filter((item) => item.id !== action.payload);
    }
    case ActionsH.EDDIT_FORM_H: {
      return;
    }
    default: {
      return state;
    }
  }
};
