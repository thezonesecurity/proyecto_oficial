import { ActionsSemestre } from "../constants/ActionsSemestre";

export const AppReducerSemestre = (state, action) => {
  switch (action.type) {
    case ActionsSemestre.ADD_FORM_SEMESTRE: {
      return [...state, action.payload]; //(payload) es la carga util que se recuperadatos del formulario
    }
    case ActionsSemestre.REMOVE_FORM_SEMESTRE: {
      return state.filter((item) => item.id !== action.payload);
    }
    case ActionsSemestre.EDDIT_FORM_SEMESTRE: {
      return;
    }
    default: {
      return state;
    }
  }
};
