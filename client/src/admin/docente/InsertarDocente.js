import React from "react";

export const InsertarDocente = () => {
  return (
    <div>
      <form action="#" target="" method="get" name="formDatosPersonales">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value=""
          id="nombre"
          placeholder="Escribe tu nombre"
          onChange=""
        />

        <label for="apellidos">Apellidos</label>
        <input
          type="text"
          name="apellidos"
          value=""
          onChange=""
          id="apellidos"
          placeholder="1r Apellido"
        />
        <label for="ci">CI</label>
        <input type="text" name="ci" id="ci" placeholder="8745269" />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          value=""
          onChange=""
          id="email"
          placeholder="email"
          required
        />

        <label for="direccion">Direccion</label>
        <input
          type="text"
          name="direccion"
          value=""
          onChange=""
          id="direccion"
          placeholder="calle oruro #15"
        />

        <label for="telfono">Telefono</label>
        <input
          type="text"
          name="telfono"
          value=""
          onChange=""
          id="telefono"
          placeholder="79727515"
        />

        <label for="carga_horaria">C. Horaria</label>
        <input
          name="carga_horaria"
          type="carga_horaria"
          value=""
          onChange=""
          placeholder="24"
          maxlength="10"
        />

        <input type="submit" name="guardar" value="Guardar" />
      </form>
    </div>
  );
};
