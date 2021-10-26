import React from "react";
import { TablaListaHoraio } from "./TablaListaHoraio";

export const ListaHorario = () => {
  return (
    <div>
      <h4>Horarios</h4>
      <div className="row g-3 needs-validation" novalidate>
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
