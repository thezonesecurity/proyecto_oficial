import React, { useContext, useState } from "react";
import { ActionsH } from "./constants/ActionsH";
import DataHorario from "./contex/AppContexH";
import { useFormH } from "./hook/useFormH";
import uniqid from "uniqid";
import { ErrorValidacion } from "../../ErrorValidacion";
import { MessageCreateUser } from "../../MessageCreateUser";

export const NuevosHorarios = () => {
  //usamos el useContext
  const { state, setState, dispatch } = useContext(DataHorario);
  //console.log("stateMAteria", state);
  //usamos el userForm
  const [form, handlerChangeForm, resetForm] = useFormH({
    horaInicio: "",
    horaFin: "",
    elegirDia: "",
    elegirMateria: "",
    elegirSemestre: "",
    valido: null,
  });
  console.log("formHorario", form);
  const { horaInicio, horaFin, elegirDia, elegirMateria, elegirSemestre } =
    form;
  //para crear un horario
  const [errors, setErrors] = useState(false);
  const [createHorario, setCreateHorario] = useState(false);
  const handlerSubmitCreateH = (e) => {
    e.preventDefault();
    if (
      horaInicio === "" ||
      horaFin === "" ||
      elegirSemestre === "" ||
      elegirMateria === "" ||
      elegirDia === ""
    ) {
      //aparece un error
      setErrors(true);
      setCreateHorario(false);
      return;
    } else {
      setCreateHorario(true);
    }
    //SI TODO OKEY se agrega los datos
    dispatch({
      type: ActionsH.ADD_FORM_H,
      payload: { ...form, id: uniqid() },
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
  if (createHorario) {
    created = <MessageCreateUser mensaje="Horario creado correctamente" />;
  } else created = null;

  //para limpiar la tabla
  const clearform = () => {
    resetForm();
    setErrors(false);
    setCreateHorario(false);
  };
  return (
    <div>
      <h4>Crear Nuevo Horarios</h4>
      <form>
        <div>
          <div>
            <label htmlFor="uname">Hora Inicio: </label>
            <input
              type="time"
              id="horaInicio"
              name="horaInicio"
              value={horaInicio}
              onChange={handlerChangeForm}
            ></input>
          </div>
          <br></br>
          <div>
            <label htmlFor="uname">Hora Fin: </label>
            <input
              type="time"
              id="horaFin"
              name="horaFin"
              value={horaFin}
              onChange={handlerChangeForm}
            ></input>
          </div>
          <br></br>
        </div>

        <div>
          <label scope="col">Asignar Dia</label>
          <select
            className="col-15 col-form-label"
            name="elegirDia"
            id="elegirDia"
            value={elegirDia}
            onChange={handlerChangeForm}
          >
            <option defaultValue="Elegir dia..">Elegir Dia...</option>
            <option value="lunes">lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miercoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sabado</option>
          </select>
        </div>
        <br />

        <div>
          <label scope="col">Asignar Materia: </label>
          <select
            className="col-15 col-form-label"
            name="elegirMateria"
            id="elegirMateria"
            value={elegirMateria}
            onChange={handlerChangeForm}
          >
            <option defaultValue="Elegir materia..">Elegir materia...</option>
            <option value="Programación 1">Programación 1</option>
            <option value="Diseño">Diseño</option>
            <option value="Física 1">Física 1</option>
            <option value="Computación Básica">Computación Básica</option>
            <option value="Cálculo 1">Cálculo 1</option>
          </select>
        </div>
        <br />
        <div>
          <label scope="col">Asignar Semestre</label>
          <select
            className="col-15 col-form-label"
            name="elegirSemestre"
            id="elegirSemestre"
            value={elegirSemestre}
            onChange={handlerChangeForm}
          >
            <option defaultValue="Elegir semestre..">Elegir semestre...</option>
            <option value="Semestre 1">Semestre 1</option>
            <option value="Semestre 2">Semestre 2</option>
            <option value="Semestre 3">Semestre 3</option>
            <option value="Semestre 4">Semestre 4</option>
            <option value="Semestre 5">Semestre 5</option>
            <option value="Semestre 6">Semestre 6</option>
            <option value="Semestre 7">Semestre 7</option>
            <option value="Semestre 8">Semestre 8</option>
            <option value="Semestre 9">Semestre 9</option>
          </select>
        </div>
        <br />
        {componente}
        {created}
        <button
          type="button"
          onClick={handlerSubmitCreateH}
          className="btn btn-outline-success"
        >
          Guardar
        </button>
        {"   "}
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={clearform}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};
