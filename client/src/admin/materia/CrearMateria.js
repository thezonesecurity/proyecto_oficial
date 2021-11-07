import React, { useContext, useState } from "react";
import { Actions } from "./constants/Actions";
import DataMateria from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import uniqid from "uniqid";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import Input from "./InputForm";

export const CrearMateria = () => {
  //usamos el useContext
  const { state, setState, dispatch } = useContext(DataMateria);
  //console.log("stateMAteria", state);
  //usamos el userForm
  const [form, handlerChangeForm, resetForm] = useForm({
    num: "",
    materia: "",
    sigla: "",
    carga_horaria: "",
    valido: null,
  });
  //console.log("form", form.materia);
  const { num, materia, sigla, carga_horaria, valido } = form;
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  //ESTO PARA VALIDAR Y GUARDAR DATOS
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    //para validar
    if (materia === "" || sigla === "" || carga_horaria === "") {
      //aparece un error
      setErrors(true);
      setCreateUser(false);
      return;
    } else {
      setCreateUser(true);
    }
    //SI NO se agrega los datos
    dispatch({
      type: Actions.ADD_FORM_M,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });
    resetForm();
    setErrors(false);
  };
  //ESTA PARTE CARGA UN COMPONENTE CONDICCIONALMENTE
  let componente;

  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;

  let created;
  if (createUser) {
    created = <MessageCreateUser mensaje="Materia creada correctamente" />;
  } else created = null;
  //console.log("stateCrearMateria", state);
  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };

  return (
    <div>
      <h4>Registrar Materia</h4>
      <form>
        <Input
          htmlFor="uname"
          label="Materia :"
          type="text"
          id="materia"
          name="materia"
          value={materia}
          onChange={handlerChangeForm}
          expresionRegular={expresiones.nombre}
          valido={valido}
          required="required"
          pattern="[A-Za-z0-9]{5,40}"
          title="Letras y números. Tamaño mínimo: 5. Tamaño máximo: 40"
        />
        <span>este campo necesita caracteres</span>
        <br />
        <Input
          htmlFor="uname"
          label="Sigla :"
          type="text"
          id="sigla"
          name="sigla"
          value={sigla}
          onChange={handlerChangeForm}
          placeholder="Ej. SIS-745"
          expresionRegular={expresiones.usuario}
        />
        <br />
        <Input
          htmlFor="uname"
          label="Carga Horaria:"
          type="number"
          id="carga_horaria"
          name="carga_horaria"
          value={carga_horaria}
          onChange={handlerChangeForm}
          placeholder="Ej. 45 "
          expresionRegular={expresiones.telefono}
          inputmode="numeric"
          pattern="[0-9]*"
        />
        <br />
        {componente}
        {created}
        <button
          onClick={handlerSubmit}
          type="button"
          className="btn btn-outline-success"
        >
          Guardar
        </button>
        {"   "}
        <button
          onClick={clearform}
          type="button"
          className="btn btn-outline-dark"
        >
          Cancelar
        </button>
      </form>
      <br />
    </div>
  );
};

/*
 /*
    if (materia.length > 4 && materia.length < 40) {
      if (sigla.length > 6 && sigla.length < 8) {
        if (carga_horaria.length > 1 && materia.length < 3) {
          //SI NO se agrega los datos
          dispatch({
            type: Actions.ADD_FORM_M,
            payload: { ...form, id: uniqid(), num: state.length + 1 },
          });
          resetForm();
          setErrors(false);
        }
      }
    }
    
  };
*/

/*
import React, { useContext, useState } from "react";
import { Actions } from "./constants/Actions";
import DataMateria from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import uniqid from "uniqid";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import Input from "./InputForm";

export const CrearMateria = () => {
  //usamos el useContext
  const { state, setState, dispatch } = useContext(DataMateria);
  // console.log("stateMAteria", state);
  //usamos el userForm
  const [form, handlerChangeForm, resetForm] = useForm({
    num: "",
    materia: "",
    sigla: "",
    carga_horaria: "",
    valido: null,
  });
  //console.log("form", form.materia);
  const { num, materia, sigla, carga_horaria, valido } = form;
  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  //ESTO PARA VALIDAR Y GUARDAR DATOS
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    // const num = 0;
    //para validar
    if (materia === "" || sigla === "" || carga_horaria === "") {
      //aparece un error
      setErrors(true);
      return;
    } else {
      setCreateUser(true);
    }
    //SI NO se agrega los datos
    dispatch({
      type: Actions.ADD_FORM_M,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });
    resetForm();
    setErrors(false);
  };
  //ESTA PARTE CARGA UN COMPONENTE CONDICCIONALMENTE
  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createUser) {
    created = <MessageCreateUser mensaje="Materia creada correctamente" />;
  } else created = null;
  //console.log("stateCrearMateria", state);
  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };
  return (
    <div>
      <h4>Registrar Materia</h4>
      <form>
        <Input
          htmlFor="uname"
          label="Materia :"
          type="text"
          id="materia"
          name="materia"
          value={materia}
          onChange={handlerChangeForm}
          expresionRegular={expresiones.nombre}
        />
        <br />
        <Input
          htmlFor="uname"
          label="Sigla :"
          type="text"
          id="sigla"
          name="sigla"
          value={sigla}
          onChange={handlerChangeForm}
          placeholder="Ej. SIS-745"
        />
        <br />
        <Input
          htmlFor="uname"
          label="Carga Horaria:"
          type="number"
          id="carga_horaria"
          name="carga_horaria"
          value={carga_horaria}
          onChange={handlerChangeForm}
          placeholder="Ej. 45 "
        />
        <br />
        {componente}
        {created}
        <button
          onClick={handlerSubmit}
          type="button"
          className="btn btn-outline-success"
        >
          Guardar
        </button>
        {"   "}
        <button
          onClick={clearform}
          type="button"
          className="btn btn-outline-dark"
        >
          Cancelar
        </button>
      </form>
      <br />
    </div>
  );
};

*/
