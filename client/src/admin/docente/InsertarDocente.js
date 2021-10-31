import React, { useContext } from "react";
import { actions } from "./contants/actions";
import DataDocente from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import uniqid from "uniqid";

export const InsertarDocente = () => {
  const { state, setState, dispatch } = useContext(DataDocente);

  const [form, handlerChangeForm, resetForm] = useForm({
    num: "",
    nombre: "",
    apellidos: "",
    ci: "",
    email: "",
    direccion: "",
    telefono: "",
    carga_horaria: "",
  });
  const {
    num,
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
  } = form;
  const handlerSubmit = (e) => {
    // e.preventDefault(); --> evita que se propague el formulario
    e.preventDefault();
    //const num = 0;
    dispatch({
      type: actions.ADD_FORM,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });

    resetForm();
  };

  const clearForm = () => {
    resetForm();
  };
  console.log("dataDocente", state);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="dd"
            value={nombre}
            placeholder="Escribe tu nombre"
            onChange={handlerChangeForm}
          />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            id=""
            value={apellidos}
            placeholder="1r Apellido"
            onChange={handlerChangeForm}
          />
          <label htmlFor="ci">CI</label>
          <input
            type="text"
            name="ci"
            id=""
            value={ci}
            placeholder="8745269"
            onChange={handlerChangeForm}
          />
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            name="email"
            value=""
            onChange=""
            id="email"
            value={email}
            placeholder="email"
            onChange={handlerChangeForm}
            required
          />
          <label htmlFor="direccion">Direccion</label>
          <input
            type="text"
            name="direccion"
            id=""
            value={direccion}
            placeholder="calle oruro #15"
            onChange={handlerChangeForm}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            type="number"
            name="telefono"
            id="telefono"
            value={telefono}
            placeholder="79727515"
            onChange={handlerChangeForm}
          />

          <label htmlFor="carga_horaria">C. Horaria</label>
          <input
            name="carga_horaria"
            type="number"
            value={carga_horaria}
            placeholder="ej. 45 min"
            onChange={handlerChangeForm}
          />
        </div>
        <br></br>
        <button
          onClick={handlerSubmit}
          type="button"
          className="btn btn-outline-success"
        >
          Guardar
        </button>
        {"  "}
        <button
          onClick={clearForm}
          type="button"
          className="btn btn-outline-dark"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};
