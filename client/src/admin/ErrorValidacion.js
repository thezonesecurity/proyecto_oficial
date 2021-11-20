import React from "react";

export const ErrorValidacion = ({ mensaje }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {mensaje}
    </div>
  );
};
