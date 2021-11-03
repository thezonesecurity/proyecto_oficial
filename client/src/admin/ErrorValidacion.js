import React from "react";

export const ErrorValidacion = ({ mensaje }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {mensaje}
    </div>
  );
};
