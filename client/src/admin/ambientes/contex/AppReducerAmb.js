import React from "react";
import { actionsAmb } from "../contants/actionsAmb";

export const AppReducerAmb = (state, action) => {
  switch (action.type) {
    case actionsAmb.ADD_FORM_A: {
      return [...state, action.payload]; //(payload) es la carga util que se recuperadatos del formulario
    }

    case actionsAmb.REMOVE_FORM_A: {
      return state.filter((item) => item.id !== action.payload);
    }

    case actionsAmb.EDDIT_FORM_A: {
      return;
    }
    default: {
      return state;
    }
  }
};
