import React, { useEffect, useState } from "react";
import { useForm } from "../admin/ambientes/hooks/useForm";
import { endPointsIE } from "./constants/endPointsIE";
import { authRegisterIE } from "./constants/authIE";
import { useDispatch } from "react-redux";
import { ErrorValidacion } from "../admin/ErrorValidacion";
import { MessageCreateUser } from "../admin/MessageCreateUser";

export const TablaProgramacion = (props) => {
  console.log("tabla programacion", props);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [createRol, setCreateRol] = useState(false);
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
    // console.log("datosApi", dataMateria);
  }, []);
  // console.log("datosApiMATERIA", dataMateria);
  //------------------------------------------------------------------------

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

  ///--------------------Para asignar cualquier materia------------------------------
  /* const [form, handlerChangeForm, resetForm] = useForm({
    grupo: "",
    materia: "",
    sigla: "",
  });
  console.log("form AMD", form);
  const { grupo, materia, sigla } = form;*/

  ////-----------------------Paraverificar datos-----------------------
  /* const handleSaveDate = (e) => {
    e.preventDefault();

    if (grupo === "" || materia === "") {
      setErrors(true);
      setCreateRol(false);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
      return;
    } else {
      setCreateRol(true);
      setTimeout(() => {
        setCreateRol(false);
      }, 4000);
    }
    dispatch(
      authRegisterIE({
        grupo,
        materia,
        sigla,
        unoParcial: `0`,
        dosParcial: `0`,
        tresParcial: `0`,
        pormParcial: `0`,
        examenFinal: `0`,
        notaFinal: `0`,
        segundoTurno: `0`,
      })
    );
    resetForm();
  };

  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createRol) {
    created = <MessageCreateUser mensaje="Programacion exitosa" />;
  } else created = null;
  const clearForm = () => {
    resetForm();
    setErrors(false);
    setCreateRol(false);
  };
*/
  return (
    <>
      <div className="col-5 card">
        <div className="row align-items-start">
          <div className="col sm-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                name="materia1"
                value={props.materia}
                onChange={handlerChangeForm}
              ></input>
              <h4>{props.materia}</h4>
              <label
                className="form-check-label"
                for="flexCheckDefault"
              ></label>
            </div>
            <select
              id="grupo"
              name="grupo1"
              className="form-select"
              value={props.grupo}
              onChange={handlerChangeForm}
            >
              <option defaultValue="sinvalor">grupo</option>
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
    </>
  );
};

/*
<div className="row align-items-start">
      <div className="col sm-10">
        <td>
          <div className="form-check">
            <h8>Diseño y Programación Gráfica</h8>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault"></label>
          </div>
          <table className="table table-borderless">
            <h8>Grupo</h8>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select</option>
              <option value="1">G1</option>
              <option value="2">G2</option>
            </select>
          </table>
        </td>
      </div>
    </div>
*/

/*
 <div className="col-8 card">
      <div className="row align-items-start">
        <td>
          <div className="col sm-5">
            <div className="form-check"></div>
            <table className="table table-borderless">
              <label className="col-4 col-form">Materias</label>
              <div className="col-8">
                <select
                  id="materia"
                  name="materia"
                  className="form-select"
                  value={materia}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Materias</option>
                  {dataGrupo.length > 0 ? (
                    dataGrupo.map((item) => {
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
                    <option value="sinSemestre">Programe una Materia</option>
                  )}
                </select>
              </div>

              <label className="col-4 col-form">Grupo</label>
              <div className="col-8">
                <select
                  id="grupo"
                  name="grupo"
                  className="form-select"
                  value={grupo}
                  onChange={handlerChangeForm}
                >
                  <option defaultValue="sinvalor">Elija un Grupo</option>
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
                    <option value="sinSemestre">Elija un grupo</option>
                  )}
                </select>
              </div>
            </table>
            <br />
            {componente}
            {created}
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={handleSaveDate}
            >
              Programar
            </button>{" "}
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={clearForm}
            >
              Cancelar
            </button>
          </div>
        </td>
      </div>
    </div>
*/
