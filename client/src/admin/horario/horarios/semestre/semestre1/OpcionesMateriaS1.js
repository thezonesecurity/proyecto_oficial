import React, { useContext, useState } from "react";

export const OpcionesMateriaS1 = (props) => {
  //console.log("OM", props);
  const [casilla, setCasilla] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    setCasilla(e.target.value);
  };
  // console.log("OM2", casilla);
  props.onfuc(casilla);
  return (
    <td>
      <select
        className="col-form-label"
        value={casilla.valor}
        onChange={handleChangeOption}
      >
        <option value="Elegir materia..">Elegir materia...</option>
        <option value="Programación 1">Programación 1</option>
        <option value="Diseño">Diseño</option>
        <option value="Física 1">Física 1</option>
        <option value="Computación Básica">Computación Básica</option>
        <option value="Cálculo 1">Cálculo 1</option>
      </select>
    </td>
  );
};
