import { types } from "../types/types";

export const AppReducerUser = (state, action) => {
  switch (action.type) {
    case types.REGISTER_USER: {
      return [...state, action.payload]; //(payload) es la carga util que se recuperadatos del formulario
    }

    case types.DELETE_USER: {
      return state.filter((item) => item.id !== action.payload);
    }

    case types.UPDATE_USER: {
      return;
    }
    default: {
      return state;
    }
  }
};
