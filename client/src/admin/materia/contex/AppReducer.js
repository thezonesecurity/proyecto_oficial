import { Actions } from "../constants/Actions";

export const AppReducer = (state, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case Actions.ADD_FORM_M: {
      return [...state, action.payload];
    }

    case Actions.REMOVE_FORM_M: {
      return state.filter((item) => item.id !== action.payload);
    }

    case Actions.EDDIT_FORM_M: {
      return;
    }
    default: {
      return state;
    }
  }
};
