import React, { useContext } from "react";
import DataHorario from "./contex/AppContexH";
import { OpcionSemestre } from "./OpcionSemestre";
import { TablaListaHoraio } from "./TablaListaHoraio";

export const ListaHorario = () => {
  const { state, dispatch } = useContext(DataHorario);
  //console.log("statehotario", state);
  const falsehorarios = [
    {
      elegirDia: "lunes",
      elegirMateria: "Diseño",
      elegirSemestre: "Semestre 2",
      horaFin: "08:30",
      horaInicio: "07:45",
      id: "a1",
      valido: null,
    },
    {
      elegirDia: "martes",
      elegirMateria: "Diseño 2",
      elegirSemestre: "Semestre 2",
      horaFin: "08:30",
      horaInicio: "07:45",
      id: "a2",
      valido: null,
    },
    {
      elegirDia: "miercoles",
      elegirMateria: "Diseño 3",
      elegirSemestre: "Semestre 2",
      horaFin: "08:30",
      horaInicio: "07:45",
      id: "a3",
      valido: null,
    },
    {
      elegirDia: "jueves",
      elegirMateria: "Diseño 4",
      elegirSemestre: "Semestre 2",
      horaFin: "08:30",
      horaInicio: "07:45",
      id: "a4",
      valido: null,
    },
    {
      elegirDia: "viernes",
      elegirMateria: "Diseño 5",
      elegirSemestre: "Semestre 2",
      horaFin: "08:30",
      horaInicio: "07:45",
      id: "a4",
      valido: null,
    },
  ];
  return (
    <div>
      <h4>Horarios</h4>
      <div className="col-md-4">
        <OpcionSemestre />
      </div>
      <br />
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">horas</th>
              <th scope="col">lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miercoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>

          {falsehorarios.length > 0 ? (
            falsehorarios.map((horario) => {
              return <TablaListaHoraio key={horario.id} {...horario} />;
            })
          ) : (
            <tbody>
              <tr>
                <td colSpan="7">No hay Horarios registrados...</td>
              </tr>
            </tbody>
          )}
        </table>
        <div>
          <button type="button" className="btn btn-dark">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};
