import React, { useContext, useState } from "react";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import { actionsAmb } from "./contants/actionsAmb";
import uniqid from "uniqid";
import DataAmbiente from "./contex/AppContext";
import { useForm } from "./hooks/useForm";

export const CrearAmbiente = () => {
  const { state, setState, dispatch } = useContext(DataAmbiente);
  const [form, handlerChangeForm, resetForm] = useForm({
    num: "",
    ambiente: "",
    ubicacion: "",
  });
  const { num, ambiente, ubicacion } = form;
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmitSaveAmb = (e) => {
    e.preventDefault();
    if (ambiente === "" || ubicacion === "") {
      setErrors(true);
      setCreateUser(false);
      return;
    } else {
      setCreateUser(true);
    }
    ///añade los datos a la tabla
    let num = 0;
    dispatch({
      type: actionsAmb.ADD_FORM_A,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });
    resetForm();
    setErrors(false);
  };

  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createUser) {
    created = <MessageCreateUser mensaje="Ambiente creado correctamente" />;
  } else created = null;
  //este es para el boton cancelar que recetea la tabla
  const clearForm = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };

  return (
    <div>
      <h4>Formulario crear ambiente</h4>
      <form>
        <div>
          <label htmlFor="uname">Ambiente</label>
          <input
            type="text"
            name="ambiente"
            id="ambiente"
            placeholder="2"
            value={ambiente}
            onChange={handlerChangeForm}
          />
          <br />
          <label htmlFor="uname">Ubicación</label>
          <input
            type="text"
            name="ubicacion"
            id="ubicacion"
            value={ubicacion}
            onChange={handlerChangeForm}
            placeholder="1 Piso"
          />
          <br />
          {componente}
          {created}
          <button
            onClick={handlerSubmitSaveAmb}
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
        </div>
      </form>
    </div>
  );
};
