import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import { useForm } from "./hooks/useForm";
import { authRegisterAmbiente } from "./actions/authAmbiente";

export const CrearAmbiente = () => {
  const dispatch = useDispatch();
  //const { state, setState, dispatch } = useContext(DataAmbiente);
  const [form, handlerChangeForm, resetForm] = useForm({
    // num: "",
    ambiente: "",
    ubicacion: "",
  });
  const { ambiente, ubicacion } = form;
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSaveAmb = (e) => {
    e.preventDefault();
    if (ambiente === "" || ubicacion === "") {
      setErrors(true);
      setCreateUser(false);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
      return;
    } else {
      setCreateUser(true);
      setTimeout(() => {
        setCreateUser(false);
      }, 4000);
    }
    ///añade los datos a la BD
    /*
    let num = 0;
    dispatch({
      type: actionsAmb.ADD_FORM_A,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });*/
    dispatch(authRegisterAmbiente({ ambiente, ubicacion }));
    resetForm();
    setErrors(false);
  };
  console.log("estadoTest", form);
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
  console.log("form", form);
  return (
    <>
      <h4 className="titleForm">Formulario crear ambiente</h4>
      <form>
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
          onClick={handlerSaveAmb}
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
    </>
  );
};
