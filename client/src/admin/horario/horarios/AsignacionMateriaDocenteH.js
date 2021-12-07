import React, { useContext, useEffect, useState } from "react";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";

import { useForm } from "../../ambientes/hooks/useForm";
import { ActionsH } from "./constants/ActionsH";
import { DataAMD } from "./contex/AppContexH";
import { endpointsAMD } from "./constants/endPointsAMD";
import DataAmbiente from "../../ambientes/contex/AppContext";
import { ErrorValidacion } from "../../ErrorValidacion";
import { MessageCreateUser } from "../../MessageCreateUser";
import { authRegisterAMD } from "./constants/authADM";

export const AsignacionMateriaDocenteH = () => {
  const dispatch = useDispatch();
  //---------------------------peticion de lista usuarios---------------------
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    fetch(endpointsAMD.listDocente.url, {
      method: endpointsAMD.listDocente.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("serverREsponse", data.serverResponse);
        setDataUser(data.serverResponse);
      });
    // console.log("datosApiUser", dataUser);
  }, []);
  console.log("datosApiUSER", dataUser);
  //---------------------------peticion de lista materias---------------------
  const [dataMateria, setDataMateria] = useState({});
  useEffect(() => {
    fetch(endpointsAMD.listMateria.url, {
      method: endpointsAMD.listMateria.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("serverREsponse", data.serverResponse);
        setDataMateria(data.serverResponse);
      });
    // console.log("datosApi", dataMateria);
  }, []);
  console.log("datosApiMATERIA", dataMateria);
  //--------------------------- peticion de lista ambientes---------------------
  const [preListAmbiente, setPreListAmbiente] = useState({});
  const [listAmbiente, setListAmbiente] = useState({});
  const [test, setTest] = useState({});
  /*
  const fuc = () => {
    test.forEach((element) => {
      let ubi = element.ubicacion;
      let amb = element.ambiente;

      element.ambiente = amb + " " + ubi;
      console.log("test amb -> ", element.ambiente);
      console.log("test ubi-> ", element.ubicacion);
    });
  };
  fuc();
  /*
  const fuc = () => {
    test.forEach((element) => {
      let ubi = element.Ubicacion;
      let amb = element.ambiente;

      element.ambiente = amb + " " + ubi;
      console.log("test amb -> ", element.ambiente);
      console.log("test ubi-> ", element.ubicacion);
    });
  };
  fuc();
*/
  useEffect(() => {
    fetch(endpointsAMD.listAmbiente.url, {
      method: endpointsAMD.listAmbiente.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("serverREsponseAmb", data.serverResponse);
        setPreListAmbiente(data.serverResponse);
        setListAmbiente(data.serverResponse);
        setTest(data.serverResponse);
        //

        /*
        const fuc = () => {
          data.serverResponse.forEach((element) => {
            setTest([element.ambiente + " " + element.ubicacion]);
            //setListAmbiente(...[element.ambiente + " " + element.ubicacion]);7
            setListAmbiente([
              ...preListAmbiente,
              { colore: element.ambiente + " " + element.ubicacion },
            ]);
          });
        };
        fuc();*/
      });
  }, []);

  console.log("datosApiAMBIENTE", preListAmbiente);
  //console.log("listAmbiente -> ", listAmbiente);
  //console.log("test -> ", test);
  //--------------------------- peticion para guardar asignacion materia docente---------------------
  //const { state, setState, dispatch } = useContext(DataAMD);
  const [errors, setErrors] = useState(false);
  const [createAMD, setCreateAMD] = useState(false);
  const [form, handlerChangeForm, resetForm] = useForm({
    grupo: "",
    materia: "",
    docente: "",
    // sigla: "",
    // num: "",
    // ambiente: "",
  });
  console.log("form AMD", form);
  const { grupo, materia, docente } = form;
  //const [data, setData] = useState({});
  const handleSaveDate = (e) => {
    e.preventDefault();
    if (grupo === "" || materia === "" || docente === "") {
      setErrors(true);
      setCreateAMD(false);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
      return;
    } else {
      setCreateAMD(true);
      setTimeout(() => {
        setCreateAMD(false);
      }, 4000);
    }

    if (materia !== "Asigne un Materia" || docente !== "Asigne un Docente") {
      dispatch(authRegisterAMD({ grupo, materia, docente }));
      resetForm();
    }
    /*
    let num = 0;
    dispatch({
      type: ActionsH.ADD_FORM_AMD,
      payload: { ...form, id: uniqid() },
    });
    //setData(form, { id: uniqid() });*/
  };

  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createAMD) {
    created = (
      <MessageCreateUser mensaje="Asignacion materia-docente creado correctamente" />
    );
  } else created = null;
  //este es para el boton cancelar que recetea la tabla
  const clearForm = () => {
    resetForm();
    setErrors(false);
    setCreateAMD(false);
  };
  return (
    <>
      <h4 className="titleForm">Asignacion Materia Docente</h4>
      <form>
        <div className="form-group row">
          <label className="col-2 col-form">Grupo</label>
          <div className="col-5">
            <input
              type="text"
              name="grupo"
              id="grupo"
              className="form-control"
              value={grupo}
              onChange={handlerChangeForm}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form">Materia</label>
          <div className="col-10">
            <select
              id="materia"
              name="materia"
              className="form-select"
              value={materia}
              onChange={handlerChangeForm}
            >
              <option defaultValue="sinvalor">Asigne un Materia</option>
              {dataMateria.length > 0 ? (
                dataMateria.map((item) => {
                  return (
                    <>
                      <option key={item._id} value={item.materia}>
                        {item.materia}
                      </option>
                      ;
                    </>
                  );
                })
              ) : (
                <option value="sinSemestre">No existe materias creadas</option>
              )}
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-2 col-form">Docente</label>
          <div className="col-10">
            <select
              id="docente"
              name="docente"
              className="form-select"
              value={docente}
              onChange={handlerChangeForm}
            >
              <option defaultValue="sinvalor">Asigne un Docente</option>
              {dataUser.length > 0 ? (
                dataUser.map((item) => {
                  return (
                    <>
                      {item.rolUser === "Docente" && (
                        <option key={item._id}>
                          {item.nombre} {item.apellidos}
                        </option>
                      )}
                    </>
                  );
                })
              ) : (
                <option value="sinSemestre">No existe materias creadas</option>
              )}
            </select>
          </div>
        </div>
        {/*
        <div className="form-group row">
          <label className="col-4 col-form">Ambiente</label>
          <div className="col-6">
            <select
              id="ambiente"
              name="ambiente"
              className="form-select"
              value={ambiente}
              onChange={handlerChangeForm}
            >
              {preListAmbiente.length > 0 ? (
                preListAmbiente.map((item) => {
                  return (
                    <>
                      <option key={item._id} value={item.ambiente}>
                        {item.ambiente} - - {item.Ubicacion}
                      </option>
                    </>
                  );
                })
              ) : (
                <option value="sinSemestre">No existe ambientes creados</option>
              )}
            </select>
          </div>
        </div> */}
        {componente}
        {created}
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={handleSaveDate}
        >
          Guardar
        </button>{" "}
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

{
  /*<option defaultValue="sin opcion">Elejir una opcion</option>
              <option value="opcion 1">opcion 1</option>
              <option value="opcion 2">opcion 2</option>
            <option value="opcion 3">opcion 3</option>*/
}
