import axios from "axios";
import React, { useState } from "react";

import { ErrorValidacion } from "../admin/ErrorValidacion";
import { MessageCreateUser } from "../admin/MessageCreateUser";
import { endPointsID } from "./constants/endPointsID";
import { useFormIDocente } from "./hooks/useFormIDocente";

export const SolicitarAjusteMateria = () => {
  // --------------------------
  const [form, handlerChangeForm, resetForm] = useFormIDocente({
    para: "",
    de: "",
    asunto: "",

    // valido: null,
  });
  const { para, de, asunto } = form;
  console.log("FORM", form);
  // -----------para crear-------------
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  const validate = {
    email: /^[\w\.]+@\w+[.][\w]{2,3}$/,
  };
  const [valido, setValido] = useState(false);
  //----- para guardar datos en el servidor
  const handlerSubmitSaveIDocente = (e) => {
    e.preventDefault();
    if (para === "" || de === "" || asunto === "") {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 5000);
      return;
    }
    //validacion(para, de);
    if (validate.email.test(para) && validate.email.test(de)) {
      console.log("input correcto");
      setValido(true);
      setCreateUser(false);
      const peticionPostID = async () => {
        const result = await axios
          .post(endPointsID.EnviarMensaje.url, form)
          .catch(function (error) {
            console.log(error);
          });
      };
      peticionPostID();
      resetForm();
      setTimeout(() => {
        setValido(false);
      }, 5000);
    } else {
      console.log("input incorrecto");
      setCreateUser(true);
      setTimeout(() => {
        setCreateUser(false);
      }, 5000);
    }
    setErrors(false);
  };
  // -----------------------------
  //ESTA PARTE CARGA UN COMPONENTE CONDICCIONALMENTE
  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique, todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createUser) {
    created = <ErrorValidacion mensaje="Verifique, emails incorrectos" />;
  } else created = null;
  //console.log("stateCrearSemestre", state);
  let errornovalido;
  if (valido) {
    errornovalido = (
      <MessageCreateUser mensaje="Mensaje enviado correctamente" />
    );
  } else errornovalido = null;
  // --------------------------
  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };
  //console.log("TEST1", form);
  return (
    <>
      <h4 className="titleForm">Solicitar Ajuste De Materia</h4>
      <form>
        <div className="form-group row">
          <label htmlFor="input" className="col-2 col-form-label">
            PARA:
          </label>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              name="para"
              value={para}
              onChange={handlerChangeForm}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input" className="col-2 col-form-label">
            DE:
          </label>
          <div className="col-6">
            <input
              type="email"
              className="form-control"
              name="de"
              value={de}
              onChange={handlerChangeForm}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="input" className="col-3 col-form-label">
            ASUNTO:
          </label>
          <div class="form-floating">
            <textarea
              type="text"
              className="form-control"
              name="asunto"
              value={asunto}
              onChange={handlerChangeForm}
            ></textarea>
            <label for="floatingTextarea">Mensaje:</label>
          </div>
        </div>
      </form>
      <br />
      {componente}
      {created}
      {errornovalido}
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handlerSubmitSaveIDocente}
      >
        Enviar
      </button>{" "}
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={clearform}
      >
        Cancelar
      </button>
    </>
  );
};

/*const validacion = (validoP, validoD) => {
    if (validate.email.test(validoP) && validate.email.test(validoD)) {
      console.log("input correcto");
      setValido(true);
      setTimeout(() => {
        setValido(false);
      }, 5000);
    } else {
      console.log("input incorrecto");
      setValido(false);
    }
  };
  console.log("valido", valido);*/
