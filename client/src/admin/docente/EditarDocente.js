import React, { useContext, useState } from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import { ContenidoTabla } from "./ContenidoTabla";
import DataDocente from "./contex/AppContext";
import { ModalDocente } from "./ModalDocente";

export const EditarDocente = () => {
  const { state, dispatch } = useContext(DataDocente);

  const test = () => {
    //console.log("prueba de test");
  };
  const {
    num,
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
    id,
  } = state;

  return (
    <div>
      <h4>Editar Docentes</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">C.I.</th>
            <th scope="col">E-mail</th>
            <th scope="col">Direccion</th>
            <th scope="col">telefono</th>
            <th scope="col">Carga horaria</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        {state.map((item) => {
          return <ContenidoTabla key={item.id} {...item} />;
        })}

        <tbody>
          <tr>
            <th scope="row">{num}</th>
            <td>{nombre}</td>
            <td>{apellidos}</td>
            <td>{ci}</td>
            <td>{email}</td>
            <td>{direccion}</td>
            <td>{telefono}</td>
            <td> {carga_horaria}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

{
  /*<div>
        <div className="row align-items-start">
          <h9 className="col">Nro.</h9>
          <h9 className="col"> Nombres</h9>
          <h9 className="col"> Apellidos</h9>
          <h9 className="col"> Opciones</h9>
        </div>

        <div className="row align-items-start">
          <div className="col">1</div>
          <div className="col">Juan </div>
          <div className="col">Ramon Valdez</div>
          <div className="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">2</div>
          <div className="col">Ana </div>
          <div className="col">Maria Mendoza</div>
          <div className="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">3</div>
          <div className="col">Alex </div>
          <div className="col">Gutierrez</div>
          <div className="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
      </div>*/
}
