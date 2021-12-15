import React, { useEffect, useState } from "react";
import { endPointsIE } from "./constants/endPointsIE";
import { useForm } from "./hooks/useForm";

import { TablaProgramacion } from "./TablaProgramacion";

export const ProgramarMaterias = () => {
  const [dataMateriaIE, setDataMateriaIE] = useState([]);
  useEffect(() => {
    fetch(endPointsIE.listMateriaIE.url, {
      method: endPointsIE.listMateriaIE.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        //console.log("serverREsponse IESTUDIANTE", data.serverResponse);
        setDataMateriaIE(data.serverResponse);
      });
  }, []);

  console.log("IEMateriaDATA", dataMateriaIE);
  //console.log("IEMateria", dataMateriaIE[0].materia);

  ///---------------------------------grupo-------------------
  //---------------------------peticion de lista grupo---------------------
  const [dataGrupo, setDataGrupo] = useState([]);
  useEffect(() => {
    fetch(endPointsIE.listaAMD.url, {
      method: endPointsIE.listaAMD.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("serverREsponse", data.serverResponse);
        setDataGrupo(data.serverResponse);
      });
    // console.log("datosApi", dataGrupo);
  }, []);
  // console.log("datosApigrupo", dataGrupo);
  //------------------------------------------------------

  const [form, handlerChangeForm, resetForm] = useForm({
    sigla1: "",
    sigla2: "",
    sigla3: "",
    sigla4: "",
    sigla5: "",
    sigla6: "",
    materia1: "",
    materia2: "",
    materia3: "",
    materia4: "",
    materia5: "",
    materia6: "",
    grupo1: "",
    grupo2: "",
    grupo3: "",
    grupo4: "",
    grupo5: "",
    grupo6: "",
    unoParcial: "",
    dosParcial: "",
    tresParcial: "",
    pormParcial: "",
    examenFinal: "",
    notaFinal: "",
    segundoTurno: "",
  });
  /* form.materia1 = dataMateriaIE[0].materia;
  form.materia2 = dataMateriaIE[1].materia;
  form.materia3 = dataMateriaIE[2].materia;
  form.materia4 = dataMateriaIE[3].materia;
  form.materia5 = dataMateriaIE[4].materia;*/

  console.log("formPROGRAMARMATERIA", form);
  const {
    sigla1,
    sigla2,
    sigla3,
    sigla4,
    sigla5,
    sigla6,
    materia1,
    materia2,
    materia3,
    materia4,
    materia5,
    materia6,
    grupo1,
    grupo2,
    grupo3,
    grupo4,
    grupo5,
    grupo6,
    unoParcial,
    dosParcial,
    tresParcial,
    pormParcial,
    examenFinal,
    notaFinal,
    segundoTurno,
  } = form;

  return (
    <>
      <h4 className="titleForm">Programacion de Marerias</h4>
      <div className="row align-items-start">
        <div className="both">
          <div className="col-5 card">
            <div className="row align-items-start">
              <div className="col sm-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="materia1"
                    value=""
                    onChange={handlerChangeForm}
                  ></input>
                  <h4>{materia1}</h4>
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <select
                  id="grupo1"
                  name="grupo1"
                  className="form-select"
                  value={grupo1}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija grupo</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item.grupo}>
                            {item.grupo}
                          </option>
                          ;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">Programe un Grupo</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* */}
          <div className="col-5 card">
            <div className="row align-items-start">
              <div className="col sm-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="materia2"
                    value={materia2}
                    onChange={handlerChangeForm}
                  ></input>
                  <h4>{materia2}</h4>
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <select
                  id="grupo2"
                  name="grupo2"
                  className="form-select"
                  value={grupo2}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija grupo</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item.grupo}>
                            {item.grupo}
                          </option>
                          ;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">Programe una Materia</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          {/** */}
          <div className="col-5 card">
            <div className="row align-items-start">
              <div className="col sm-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="materia3"
                    value={materia3}
                    onChange={handlerChangeForm}
                  ></input>
                  <h4>{materia3}</h4>
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <select
                  id="grupo3"
                  name="grupo3"
                  className="form-select"
                  value={grupo3}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija grupo</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item.grupo}>
                            {item.grupo}
                          </option>
                          ;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">Programe un Grupo</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          {/** */}
          <div className="col-5 card">
            <div className="row align-items-start">
              <div className="col sm-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="materia4"
                    value={materia4}
                    onChange={handlerChangeForm}
                  ></input>
                  <h4>{materia4}</h4>
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <select
                  id="grupo4"
                  name="grupo4"
                  className="form-select"
                  value={grupo4}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija grupo</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item.grupo}>
                            {item.grupo}
                          </option>
                          ;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">Programe un group</option>
                  )}
                </select>
              </div>
            </div>
          </div>
          {/** */}
          <div className="col-5 card">
            <div className="row align-items-start">
              <div className="col sm-5">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="materia5"
                    value={materia5}
                    onChange={handlerChangeForm}
                  ></input>
                  <h4>{materia5}</h4>
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
                <select
                  id="grupo5"
                  name="grupo5"
                  className="form-select"
                  value={grupo5}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija grupo</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
                      return (
                        <>
                          <option key={item._id} value={item.grupo}>
                            {item.grupo}
                          </option>
                          ;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">Programe un group</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/*dataMateriaIE.map((item) => {
            return <TablaProgramacion key={item._id} {...item} />;
          })*/}
        </div>
      </div>
      <br />
      <button type="button" className="btn btn-outline-success">
        Programar
      </button>{" "}
      <button type="button" className="btn btn-outline-dark">
        Cancelar
      </button>
    </>
  );
};

/*
<div className="form-group row">
        <h4 className="titleForm">Programación de Materias</h4>
        <TablaProgramacion />
      </div>
*/
