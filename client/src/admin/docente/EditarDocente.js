import React from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
export const EditarDocente = () => {
  const test = () => {
    console.log("prueba de test");
  };
  return (
    <di>
      <h8>Editar Docentes</h8>
      <div>
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
      </div>

      <button type="button" className="btn btn-outline-secondary">
        Guardar
      </button>
    </di>
  );
};
