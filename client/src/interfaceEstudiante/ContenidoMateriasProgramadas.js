import React from "react";
import { endPointsIE } from "./constants/endPointsIE";

export const ContenidoMateriasProgramadas = (props) => {
  ///------- para desprogramar una materia---------------
  const handlerClickDelete = (id) => {
    if (
      window.confirm(
        `Advertencia se eliminaria el Semestre -> ${props.sigla} ${props.materia}`
      )
    ) {
      fetch(endPointsIE.eliminarIEstudiante.url + props._id, {
        method: endPointsIE.eliminarIEstudiante.method,
        headers: new Headers({
          //Authorization: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
    }
  };
  return (
    <tbody key={props._id}>
      <tr className="table-active">
        <td>{props.sigla1}</td>
        <td>{props.materia1}</td>
        <td>{props.grupo1}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>

      <tr className="table-active">
        <td>{props.sigla2}</td>
        <td>{props.materia2}</td>
        <td>{props.grupo2}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>

      <tr className="table-active">
        <td>{props.sigla3}</td>
        <td>{props.materia3}</td>
        <td>{props.grupo3}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>

      <tr className="table-active">
        <td>{props.sigla4}</td>
        <td>{props.materia4}</td>
        <td>{props.grupo4}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>

      <tr className="table-active">
        <td>{props.sigla5}</td>
        <td>{props.materia5}</td>
        <td>{props.grupo5}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>

      <tr className="table-active">
        <td>{props.sigla6}</td>
        <td>{props.materia6}</td>
        <td>{props.grupo6}</td>
        <td>{props.unoParcial}</td>
        <td>{props.dosParcial}</td>
        <td>{props.tresParcial}</td>
        <td>{props.pormParcial}</td>
        <td>{props.examenFinal}</td>
        <td>{props.notaFinal}</td>
        <td>{props.segundoTurno}</td>
      </tr>
    </tbody>
  );
};
