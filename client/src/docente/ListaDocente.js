import React from "react";

export const ListaDocente = () => {
  return (
    <div>
      <h8>Listado de Docentes</h8>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres y Apellidos</th>
            <th scope="col">C.I.</th>
            <th scope="col">E-mail</th>
            <th scope="col">Direccion</th>
            <th scope="col">telefono</th>
            <th scope="col">Carga horaria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan ramon valdez</td>
            <td>1252843</td>
            <td>Valdez@gmail.com</td>
            <td>Calle Avaroa</td>
            <td>6245521</td>
            <td>15 Hrs.</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Ana Maria Mendoza</td>
            <td>8754843</td>
            <td>MAria@gmail.com</td>
            <td>Av. Murillo</td>
            <td>62596427</td>
            <td>20 Hrs.</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Diego Mauricio Tupa</td>
            <td>85425782-b</td>
            <td>Diego-Tupa@gmail.com</td>
            <td>Calle Bustillos</td>
            <td>6212455</td>
            <td>30 Hrs.</td>
          </tr>
        </tbody>
      </table>
      <select class="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};