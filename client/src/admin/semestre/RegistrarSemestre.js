import React, { useContext, useState } from "react";
import { useFormSemestre } from "./hooks/useFormSemestre";
import DataSemestre from "./contex/AppContexSemestre";
import { ActionsSemestre } from "./constants/ActionsSemestre";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import uniqid from "uniqid";
export const RegistrarSemestre = () => {
  //para opcion semestre
  const [valueSemestre, setValueSemestre] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setValueSemestre(e.target.value);
  };
  //console.log(valueSemestre);
  const { state, setState, dispatch } = useContext(DataSemestre);
  const [form, handlerChangeForm, resetForm] = useFormSemestre({
    num: "",
    año: "",
    valido: null,
  });
  const { año, semestre } = form;
  //ESTO PARA VALIDAR Y GUARDAR DATOS
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmitSaveSemestre = (e) => {
    e.preventDefault();
    if (año === "" || semestre === "") {
      setErrors(true);
      setCreateUser(false);
      return;
    } else {
      setCreateUser(true);
    }
    //save date
    dispatch({
      type: ActionsSemestre.ADD_FORM_SEMESTRE,
      payload: {
        ...form,
        id: uniqid(),
        num: state.length + 1,
        semestre: valueSemestre,
      },
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
    created = <MessageCreateUser mensaje="Semestre creado correctamente" />;
  } else created = null;
  //console.log("stateCrearSemestre", state);

  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateUser(false);
  };
  return (
    <div>
      <h4>Registrar Semestre</h4>
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-form">Semestre</label>
          <div className="col-sm-7">
            <select
              id="semestre"
              className="form-select"
              value={valueSemestre}
              onChange={handleChangeOption}
            >
              <option value="elegirSemestre">Elegir Semestre...</option>
              <option value="semestre 1">Semestre 1</option>
              <option value="semestre 2">Semestre 2</option>
              <option value="semestre 3">Semestre 3</option>
              <option value="semestre 4">Semestre 4</option>
            </select>
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="input" className="col-sm-4 col-form-label">
            Año :
          </label>
          <div className="col-sm-8">
            <input
              type="number"
              className="form-control"
              id="año"
              placeholder="2020"
              name="año"
              value={año}
              onChange={handlerChangeForm}
            />
          </div>
        </div>
        <br />
        {componente}
        {created}
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlerSubmitSaveSemestre}
        >
          Guardar
        </button>
        {"  "}
        <button type="button" className="btn btn-dark" onClick={clearform}>
          Cancelar
        </button>
      </form>
    </div>
  );
};
{
  /** 
        <br />
        <div className="form-group row">
          <label for="input" className="col-sm-4 col-form-label">
            Materias
          </label>
          <div class="col-sm-8">
            <select id="inputState" className="form-select">
              <option selected>Diseño</option>
              <option>Programacion</option>
              <option>Forence</option>
              <option>Distribuidos</option>
              <option>Auditoria</option>
              <option>Redes</option>
              <option>Seguridad</option>
            </select>
            <textarea className="form-control"></textarea>
          </div>
        </div>
        */
}

/*
<div>
      <div className="form-group row">
        <h4>Registrar Semestre</h4>
        
        <label for="input" className="col-sm-2 col-form-label">
          Numero de Semestre
        </label>
        <div className="col-sm-10">
          <select id="inputState" className="form-select">
            <option selected>Semestre1</option>
            <option>Semestre2</option>
            <option>Semestre3</option>
            <option>Semestre4</option>
            <option>Semestre5</option>
            <option>Semestre6</option>
            <option>Semestre7</option>
            <option>Semestre8</option>
            <option>Semestre9</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          Año
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="2020"
          />
        </div>
      </div>
      <hr />
      <div className="form-group row">
        <label for="input" className="col-sm-2 col-form-label">
          Materias
        </label>
        <div class="col-sm-10">
          <select id="inputState" className="form-select">
            <option selected>Diseño</option>
            <option>Programacion</option>
            <option>Forence</option>
            <option>Distribuidos</option>
            <option>Auditoria</option>
            <option>Redes</option>
            <option>Seguridad</option>
          </select>
          <textarea className="form-control" rows="3"></textarea>
        </div>
      </div>

      <div className="form-group row">
        <div className="col-sm-10 col-form-label">
          <button type="button" className="btn btn-dark">
            Guardar
          </button>

          <button type="button" className="btn btn-dark">
            Cancelar
          </button>
        </div>
      </div>
    </div>
*/
