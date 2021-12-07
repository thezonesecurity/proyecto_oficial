import { ActionsH } from "../constants/ActionsH";
export const AppReducerH = (stateH, actionH) => {
  //console.log("actionH", actionH);
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

    case ActionsH.ADD_FORM_AMD: {
      return [...stateH, actionH.payload];
    }
    ////para añadir una materia en lista horarios
    /*  case ActionsH.ADD_MATERIA: {
      return [...stateH, actionH.payload];
    }
    case ActionsH.REMOVE_MATERIA: {
      return stateH.filter((item) => item.id !== actionH.payload);
    }*/

    default: {
      return stateH;
    }
  }
};
