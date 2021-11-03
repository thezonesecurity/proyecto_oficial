import React from "react";

const InputForm = ({
  label,
  htmlFor,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  expresionRegular,
}) => {
  let valido = null;
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(value)) {
        //console.log("input correcto");
        valido = "true";
      } else {
        //console.log("input incorrecto");
        valido = "false";
      }
    }
  };
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={validacion}
        onBlur={validacion}
      ></input>
    </div>
  );
};
export default InputForm;
