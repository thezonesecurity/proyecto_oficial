import { actions } from "../contants/actions";

export const AppReducer = (state, action) => {
  //console.log("reducer", action);
  switch (action.type) {
    case actions.ADD_FORM: {
      return [...state, action.payload];
    }

    case actions.REMOVE_FORM: {
      return state.filter((item) => item.id !== action.payload);
    }

    case actions.EDDIT_FORM: {
      return;
    }
    default: {
      return state;
    }
  }
};
