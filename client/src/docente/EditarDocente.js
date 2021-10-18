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
        <div class="row align-items-start">
          <h9 class="col">Nro.</h9>
          <h9 class="col"> Nombres</h9>
          <h9 class="col"> Apellidos</h9>
          <h9 class="col"> Opciones</h9>
        </div>

        <div class="row align-items-start">
          <div class="col">1</div>
          <div class="col">Juan </div>
          <div class="col">Ramon Valdez</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">2</div>
          <div class="col">Ana </div>
          <div class="col">Maria Mendoza</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">3</div>
          <div class="col">Alex </div>
          <div class="col">Gutierrez</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-outline-secondary">
        Guardar
      </button>
    </di>
  );
};
