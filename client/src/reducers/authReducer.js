import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin: {
      const { id, displayName, photo } = action.payload;
      return {
        id,
        displayName,
        photo,
      };
    }
    case types.authLogout: {
      return null;
    }
    default: {
      return state;
    }
  }
};
