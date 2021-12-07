import React from "react";

export const IngresarHorarios = () => {
  return (
    <>
      <h4 className="titleForm">Crear Horarios</h4>
      <form>
        <div className="subform">
          <label htmlFor="hora">Hora</label>
          <input type="text" name="hora" id="hora" />

          <label htmlFor="lunes">Lunes</label>
          <input type="text" name="lunes" id="lunes" />

          <label htmlFor="martes">Martes</label>
          <input type="text" name="martes" id="martes" />

          <label htmlFor="miercoles">Miercoles</label>
          <input type="text" name="miercoles" id="miercoles" />

          <label htmlFor="jueves">Jueves</label>
          <input type="text" name="jueves" id="jueves" />

          <label htmlFor="viernes">Viernes</label>
          <input type="text" name="viernes" id="viernes" />
        </div>
        <br />
        <button type="button" className="btn btn-outline-success">
          Guardar
        </button>
        {"  "}
        <button type="button" className="btn btn-outline-dark">
          Cancelar
        </button>
      </form>
    </>
  );
};
