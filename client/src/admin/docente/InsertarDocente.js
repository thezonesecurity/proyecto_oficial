import React, { useContext, useState } from "react";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";

import { actions } from "./contants/actions";
import DataDocente from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import { authRegister } from "./actions/authDocente";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const InsertarDocente = () => {
  const dispatch = useDispatch();
  const [optionRol, setOptionRol] = useState({});
  //console.log("optionrol", optionRol);
  const handleChangeOption = (e) => {
    e.preventDefault();
    setOptionRol(e.target.value);
    //console.log("target", e.target.value);
  };

  //const { state, setState, dispatch } = useContext(DataDocente);
  const [form, handlerChangeForm, resetForm] = useForm({
    nombre: "",
    apellidos: "",
    ci: "",
    email: "",
    direccion: "",
    telefono: "",
    carga_horaria: "",
    roles: "",
    password: "",
    repassword: "",
  });
  const {
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
    roles,
    password,
    repassword,
  } = form;
  form.roles = optionRol;

  //desde aqui se controla el login
  // const { auth } = useSelector((state) => state);
  //console.log("auth", auth);
  //const { msnregister } = auth;

  // console.log("form", form);
  //esto es para insertar docentes nuevos y validar
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const [tamPassword, setTamPassword] = useState(false);
  const [validarPassword, setValidarPassword] = useState(false);

  const handlerSubmit = (e) => {
    // e.preventDefault(); --> evita que se propague el formulario
    e.preventDefault();
    //const num = 0;
    if (
      nombre === "" ||
      apellidos === "" ||
      ci === "" ||
      email === "" ||
      direccion === "" ||
      telefono === "" ||
      roles === "" ||
      password === "" ||
      repassword === ""
    ) {
      setErrors(true);
      setCreateUser(false);
      return;
    } else {
      setCreateUser(true);
    }

    if (
      form.repassword === form.password &&
      form.password.length < 20 &&
      form.password.length >= 5
    ) {
      dispatch(
        authRegister({
          nombre,
          apellidos,
          ci,
          email,
          direccion,
          telefono,
          carga_horaria,
          rolUser: roles,
          password,
        })
      );
      resetForm();
    } else {
      setValidarPassword(true);
      setTamPassword(true);
    }

    //dispatch({
    //  type: actions.ADD_FORM,
    //  payload: { ...form, id: uniqid(), num: state.length + 1 },
    //});

    setErrors(false);
  };

  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
    //setTimeout(ocultar(), 5000);
  } else componente = null;
  let created;
  if (createUser && !validarPassword && !tamPassword) {
    created = <MessageCreateUser mensaje="Docente creado correctamente" />;
  } else created = null;
  let mensajePassword;
  if (validarPassword) {
    mensajePassword = (
      <ErrorValidacion mensaje="Las contraseñas no coinciden" />
    );
  } else mensajePassword = null;

  let tamañoPassword;
  if (tamPassword) {
    tamañoPassword = (
      <ErrorValidacion mensaje="La contraseña debe de ser min.5 y max.10 dijitos" />
    );
  } else tamañoPassword = null;

  //este es para el boton cancelar que recetea la tabla
  const clearForm = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
    setValidarPassword(false);
    setTamPassword(false);
  };
  //console.log("dataDocente", state);
  const ocultar = () => {
    setErrors(false);
  };

  return (
    <>
      <h4 className="titleForm">Formulario crear Usuarios</h4>
      <form>
        <div className="subform">
          <div className="form-group row">
            <label className="col-4 col-form">Designar Rol</label>
            <div className="col-7">
              <select
                id="roles"
                className="form-select"
                value={optionRol}
                name="roles"
                onChange={handleChangeOption}
              >
                <option defaultValue="elegirRol">Designar Rol</option>
                <option value="Admin">Administrador</option>
                <option value="Docente">Docente</option>
                <option value="Estudiante">Estudiante</option>
              </select>
            </div>
          </div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={nombre}
            placeholder="Escribe tu nombre"
            onChange={handlerChangeForm}
          />
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            value={apellidos}
            placeholder="1r Apellido"
            onChange={handlerChangeForm}
          />
          <label htmlFor="ci">CI</label>
          <input
            type="text"
            name="ci"
            id="ci"
            value={ci}
            placeholder="8745269"
            onChange={handlerChangeForm}
          />
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={handlerChangeForm}
          />
          <label htmlFor="direccion">Direccion</label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={direccion}
            placeholder="calle oruro #15"
            onChange={handlerChangeForm}
          />
          <div className="bordesInputs">
            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              value={telefono}
              placeholder="79727515"
              onChange={handlerChangeForm}
            />
          </div>

          {optionRol === "Docente" && (
            <div className="bordesInputs">
              <label htmlFor="carga_horaria">Carga Hrs.</label>
              <input
                name="carga_horaria"
                type="number"
                value={carga_horaria}
                placeholder="ej. 45 min"
                onChange={handlerChangeForm}
              />
            </div>
          )}

          <div className="bordesInputs">
            <label htmlFor="carga_horaria">Contraseña</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handlerChangeForm}
            />
          </div>
          <div className="bordesInputs">
            <label htmlFor="carga_horaria">Re. Contraseña</label>
            <input
              name="repassword"
              type="password"
              value={repassword}
              onChange={handlerChangeForm}
            />
          </div>
        </div>
        <br />
        {mensajePassword}
        {tamañoPassword}
        {componente}
        {created}
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
    </>
  );
};
