import React from "react";
import { TablaListaHoraio } from "./TablaListaHoraio";
import { MdOutlineAccountCircle } from "react-icons/md";
import { OpcionSemestre } from "./OpcionSemestre";
export const ListaHorario = () => {
  return (
    <div>
      <h4>Horarios</h4>
      <div className="row g-3 needs-validation" novalidate>
        <div className="col-md-4">
          <OpcionSemestre />
        </div>
        <TablaListaHoraio />
        <div>
          <button className="btn btn-primary" type="submit">
            Editar
          </button>
          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
          <button className="btn btn-primary" type="submit">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};
