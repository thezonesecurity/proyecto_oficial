import React, { useContext } from "react";
import { Actions } from "./constants/Actions";
import DataMateria from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import uniqid from "uniqid";
export const CrearMateria = () => {
  //usamos el useContext
  const { state, setState, dispatch } = useContext(DataMateria);
  //usamos el userForm
  const [form, handlerChangeForm, resetForm] = useForm({
    num: "",
    materia: "",
    sigla: "",
    carga_horaria: "",
  });
  //console.log("form", form.materia);
  const { num, materia, sigla, carga_horaria } = form;
  //esto para guardar datos
  const handlerSubmit = (e) => {
    e.preventDefault();
    // const num = 0;
    dispatch({
      type: Actions.ADD_FORM_M,
      payload: { ...form, id: uniqid(), num: state.length + 1 },
    });
    resetForm();
  };
  console.log("stateCrearMateria", state);
  const clearform = () => {
    resetForm();
  };
  return (
    <div>
      <h4>Registrar Materia</h4>
      <form>
        <div>
          <label htmlFor="uname">Materia :</label>
          <input
            type="text"
            id="materia"
            name="materia"
            value={materia}
            onChange={handlerChangeForm}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="uname">Sigla : </label>
          <input
            type="text"
            id="sigla"
            name="sigla"
            value={sigla}
            onChange={handlerChangeForm}
            placeholder="Ej. SIS-745"
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="uname">Carga Horaria:</label>
          <input
            type="number"
            id="carga_horaria"
            name="carga_horaria"
            value={carga_horaria}
            onChange={handlerChangeForm}
            placeholder="Ej. 45 "
          ></input>
        </div>
      </form>
      <br />
      <button
        onClick={handlerSubmit}
        type="button"
        className="btn btn-outline-secondary"
      >
        Guardar
      </button>
      {"   "}
      <button
        onClick={clearform}
        type="button"
        className="btn btn-outline-secondary"
      >
        Cancelar
      </button>
    </div>
  );
};
