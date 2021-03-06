import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useForm } from "./hooks/useForm";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import Input from "./InputForm";
import { authRegisterMateria } from "./actions/authMateria";
import { endpointsM } from "./constants/endPointsM";

export const CrearMateria = () => {
  // console.log(authRegisterMateria);

  const dispatch = useDispatch();
  //para opcion semestre
  const [valueSemestre, setValueSemestre] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setValueSemestre(e.target.value);
  };
  console.log("valueSemestre", valueSemestre);
  //usamos el useContext
  //const { state, setState, dispatch } = useContext(DataMateria);
  //console.log("stateMAteria", state);
  //usamos el userForm
  const [form, handlerChangeForm, resetForm] = useForm({
    //num: "",
    materia: "",
    sigla: "",
    carga_horaria: "",
    semestre: "",
    // valido: null,
  });
  console.log("formMAteria", form);
  const { materia, sigla, carga_horaria, semestre } = form;
  /*const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };*/
  form.semestre = valueSemestre;
  //ESTO PARA VALIDAR Y GUARDAR DATOS
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    //para validar
    if (
      materia === "" ||
      sigla === "" ||
      carga_horaria === "" ||
      semestre === "sinSemestre"
    ) {
      //aparece un error
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
      }, 6000);
    }
    //SI NO se agrega los datos
    /*dispatch({
      type: Actions.ADD_FORM_M,
      payload: {
        ...form,
        id: uniqid(),
        num: state.length + 1,
        semestre: valueSemestre,
      },
    });*/

    dispatch(
      authRegisterMateria({
        materia,
        sigla,
        carga_horaria,
        semestre: valueSemestre,
      })
    );
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
  //------------------peticion al servidor de listas semestre---------------
  const [dataSemestre, setDataSemestre] = useState([]);

  useEffect(() => {
    const listData = async () => {
      const data = await axios
        .get(endpointsM.listMatSemestre.url)
        .catch(function (error) {
          console.log(error);
        });
      //console.log("result", data);
      setDataSemestre(data.data.severResponse);
      // console.log("server", data.data.severResponse);
    };
    listData();
  }, []);
  //console.log("serverMatSemestre", dataSemestre);
  //------------------FIN al servidor de listas semestre---------------
  return (
    <>
      <h4 className="titleForm">Registrar Materia</h4>
      <form>
        <Input
          htmlFor="uname"
          label="Materia :"
          type="text"
          id="materia"
          name="materia"
          value={materia}
          onChange={handlerChangeForm}
          required="required"
          pattern="[A-Za-z0-9]{5,40}"
          title="Letras y números. Tamaño mínimo: 5. Tamaño máximo: 40"
        />
        {/*<span>este campo necesita caracteres</span>*/}
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
          inputmode="numeric"
          pattern="[0-9]*"
        />
        <br />

        <div className="form-group row">
          <label className="col-4 col-form">Semestre</label>
          <div className="col-6">
            <select
              id="semestre"
              className="form-select"
              value={valueSemestre}
              onChange={handleChangeOption}
            >
              <option value="sinSemestre">Elegir Semestre</option>
              {dataSemestre.length > 0 ? (
                dataSemestre.map((item) => {
                  return (
                    <>
                      <option key={item._id} value={item.semestre}>
                        {item.semestre}
                      </option>
                      ;
                    </>
                  );
                })
              ) : (
                <option value="sinSemestre">No existe semestres creados</option>
              )}
            </select>
          </div>
        </div>
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
    </>
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
        <div className="form-group row">
          <label className="col-4 col-form">Semestre</label>
          <div className="col-6">
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
