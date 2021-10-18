import React from "react";

export const InsertarDocente = () => {
  return (
    <div>
      <form action="#" target="" method="get" name="formDatosPersonales">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Escribe tu nombre"
        />

        <label for="apellidos">Apellidos</label>
        <input
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="1r Apellido"
        />
        <label for="ci">CI</label>
        <input type="text" name="ci" id="ci" placeholder="8745269" />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />

        <label for="direccion">Direccion</label>
        <input
          type="text"
          name="direccion"
          id="direccion"
          placeholder="calle oruro #15"
        />

        <label for="telfono">Telefono</label>
        <input
          type="text"
          name="telfono"
          id="telefono"
          placeholder="79727515"
        />

        <label for="carga_horaria">C. Horaria</label>
        <input
          name="carga_horaria"
          type="carga_horaria"
          placeholder="24"
          maxlength="10"
        />

        <input type="submit" name="guardar" value="Guardar" />
      </form>
    </div>
  );
};
