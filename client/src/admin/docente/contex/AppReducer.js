import { actions } from "../contants/actions";
import { typesD } from "../types/typesD";

export const AppReducer = (state, action) => {
  //console.log("reducer", action);
  switch (action.type) {
    case actions.ADD_FORM: {
      return [...state, action.payload]; //(payload) es la carga util que se recuperadatos del formulario
    }

    case actions.REMOVE_FORM: {
      return state.filter((item) => item.id !== action.payload);
    }

    case actions.EDDIT_FORM: {
      return;
    }

    case typesD.authRegister: {
      return { ...state, msnregister: action.payload };
    }
    default: {
      return state;
    }
  }
};
