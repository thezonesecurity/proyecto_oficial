import axios from "axios";
import React, { useState } from "react";
import { ErrorValidacion } from "../admin/ErrorValidacion";
import { MessageCreateUser } from "../admin/MessageCreateUser";
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

  // -----------para crear-------------
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  //-----------------
  const handlerSubmitSaveIDocente = (e) => {
    e.preventDefault();
    if (para === "" || de === "" || asunto === "") {
      setErrors(true);
      setCreateUser(false);
      setTimeout(() => {
        setErrors(false);
      }, 5000);
      return;
    } else {
      setCreateUser(true);
      setTimeout(() => {
        setCreateUser(false);
      }, 5000);
    }

    const peticionGetID = async () => {
      const result = await axios
        .post("http://localhost:8000/api1.0/idocente/", form)
        .catch(function (error) {
          console.log(error);
        });
    };
    peticionGetID();

    resetForm();
    setErrors(false);
  };
  // -----------------------------

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
    created = <MessageCreateUser mensaje="Mensaje enviado correctamente" />;
  } else created = null;
  //console.log("stateCrearSemestre", state);

  // --------------------------

  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };
  console.log("form", form);
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
              id="para"
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
              id="de"
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
          <div className="col-8">
            <div className="col-6">
              <input
                type="text"
                id="asunto"
                className="form-control"
                name="asunto"
                value={asunto}
                onChange={handlerChangeForm}
              />
            </div>
          </div>
        </div>
      </form>
      <br />
      {componente}
      {created}
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
