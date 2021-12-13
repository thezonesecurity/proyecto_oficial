import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../ambientes/hooks/useForm";
import { ErrorValidacion } from "../../ErrorValidacion";
import { MessageCreateUser } from "../../MessageCreateUser";
import { authRegisterROl } from "../actions/authRol";

export const CrearRol = () => {
  const [valueRol, setValueRol] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setValueRol(e.target.value);
  };
  console.log("value ROL", valueRol);
  //----------------para crear un rol----------------------
  const dispatch = useDispatch();
  const [form, handlerChangeForm, resetForm] = useForm({
    nombreRol: "",
    metodoRol: "",
    url: "",
  });
  const { nombreRol, metodoRol, url } = form;
  form.metodoRol = valueRol;
  //form.url = `/api1.0/` + url;
  //logica para crear un rol
  const [errors, setErrors] = useState(false);
  const [createRol, setCreateRol] = useState(false);
  const handlerSaveRol = (e) => {
    e.preventDefault();
    if (nombreRol === "" || metodoRol === "" || url === "") {
      setErrors(true);
      setCreateRol(false);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
      return;
    } else {
      setCreateRol(true);
      setTimeout(() => {
        setCreateRol(false);
      }, 4000);
    }
    ///añade los datos a la BD
    dispatch(authRegisterROl({ nombreRol, metodoRol, url: `/api1.0/${url}/` }));
    resetForm();
    // setErrors(false);
  };
  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createRol) {
    created = <MessageCreateUser mensaje="Rol creado correctamente" />;
  } else created = null;
  console.log("form rol", form);
  //para limpiar la tabla
  const clearForm = () => {
    resetForm();
    setErrors(false);
    setCreateRol(false);
  };
  return (
    <>
      <h4 className="titleForm">Formulario para crear roles</h4>
      <form>
        <label htmlFor="uname">Rol</label>
        <input
          type="text"
          name="nombreRol"
          id="nombreRol"
          value={nombreRol}
          onChange={handlerChangeForm}
        />
        <br />
        <div className="form-group row">
          <label className="col-4 col-form">Metodo</label>
          <div className="col-6">
            <select
              id="nombreROl"
              className="form-select"
              name="nombreRol"
              value={valueRol}
              onChange={handleChangeOption}
            >
              <option value="Sin Rol">Sin Rol</option>
              <option value="get">get</option>
              <option value="post">post</option>
              <option value="put">put</option>
              <option value="delete">delete</option>
            </select>
          </div>
        </div>
        <label htmlFor="uname">nombre url</label>
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          onChange={handlerChangeForm}
        />
        <br />
        {componente}
        {created}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handlerSaveRol}
        >
          Guardar
        </button>
        {"  "}
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={clearForm}
        >
          Cancelar
        </button>
      </form>
    </>
  );
};
