import React from "react";

export const MessageCreateUser = ({ mensaje }) => {
  return (
    <div className="alert alert-success" role="alert">
      {mensaje}
    </div>
  );
};
