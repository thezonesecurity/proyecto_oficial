import React from "react";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
export const ContenidoListarAmbiente = () => {
  return (
    <div>
      <h8>Lista de Ambientes</h8>
      <div>
        {/*class="container" */}
        <div class="row align-items-start">
          <h9 class="col">Nro.</h9>
          <h9 class="col"> Ambiente</h9>
          <h9 class="col"> Ubicaciom</h9>
          <h9 class="col"> Opciones</h9>
        </div>

        <div class="row align-items-start">
          <div class="col">1</div>
          <div class="col">Amb. 2</div>
          <div class="col">1er Piso</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col">2</div>
          <div class="col">Amb. 3</div>
          <div class="col">3er Piso</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
        <div class="row align-items-end">
          <div class="col">3</div>
          <div class="col">Amb. 4</div>
          <div class="col">2do Piso</div>
          <div class="col">
            <MdCreate /> <MdDeleteSweep />
          </div>
        </div>
      </div>
    </div>
  );
};
