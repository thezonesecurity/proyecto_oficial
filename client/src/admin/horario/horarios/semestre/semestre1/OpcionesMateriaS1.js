import React, { useContext } from "react";
export const OpcionesMateriaS1 = () => {
  /*
  const [casilla1A, setCasilla1A] = useState({ id, value });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setStateOpction(e.target.value);
  };
 */
  return (
    <td>
      <select className="col-form-label" name="" id="">
        <option defaultValue="Elegir materia..">Elegir materia...</option>
        <option value="Programación 1">Programación 1</option>
        <option value="Diseño">Diseño</option>
        <option value="Física 1">Física 1</option>
        <option value="Computación Básica">Computación Básica</option>
        <option value="Cálculo 1">Cálculo 1</option>
      </select>{" "}
    </td>
  );
};
