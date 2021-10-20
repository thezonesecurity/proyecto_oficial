import React from "react";

export const NuevosHorarios = () => {
  return (
    <div>
      <h8>Nuevos Horarios</h8>
      <tbody>
        <div>
          <div>
            <label for="uname">Hora Inicio: </label>
            <input type="text" id="uname" name="name"></input>
          </div>
          <br></br>
          <div>
            <label for="uname">Hora Fin: </label>
            <input type="text" id="uname" name="name"></input>
          </div>
          <br></br>
        </div>
        <div>
          <thead>
            <th scope="col">Asignar Materia: </th>
            <select class="form-select" aria-label="Default select example">
              <option selected>Materia</option>
              <option value="1">Programación 1</option>
              <option value="2">Diseño</option>
              <option value="3">Física 1</option>
              <option value="3">Computación Básica</option>
              <option value="4">Cálculo 1</option>
            </select>
          </thead>
        </div>
      </tbody>
      <br></br>
      <table class="table table-borderless">
        <th>
          <button type="button" class="btn btn-outline-secondary">
            Guardar
          </button>
        </th>
        <th>
          <button type="button" class="btn btn-outline-secondary">
            Cancelar
          </button>
        </th>
        <th>
          <button type="button" class="btn btn-outline-secondary">
            Ver Horarios
          </button>
        </th>
      </table>
    </div>
  );
};
