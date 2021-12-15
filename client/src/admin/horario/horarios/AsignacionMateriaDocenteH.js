import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "../../ambientes/hooks/useForm";
import { ErrorValidacion } from "../../ErrorValidacion";
import { MessageCreateUser } from "../../MessageCreateUser";
import { authRegisterAMD } from "./constants/authADM";
import { endpointsAMD } from "./types/endPointsAMD";

export const AsignacionMateriaDocenteH = () => {
  const dispatch = useDispatch();
  //---------------------------peticion de lista usuarios---------------------
  const [dataUser, setDataUser] = useState([]);
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
    // console.log("datosApiUser", dataUser);form.docente === element.email
  }, []);
  //console.log("datosApiUSER", dataUser);

  //---------------------------peticion de lista materias---------------------
  const [dataMateria, setDataMateria] = useState([]);
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
  // console.log("datosApiMATERIA", dataMateria);
  //--------------------------- peticion de lista ambientes---------------------
  const [listAmbiente, setListAmbiente] = useState([]);
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
        data.serverResponse.forEach((element) => {
          setListAmbiente((prev) => {
            return [...prev, element.ambiente + " " + element.ubicacion];
          });
        });
      });
  }, []);
  //console.log("listAmbiente -> ", listAmbiente);
  //--------------------------- peticion para guardar asignacion materia docente---------------------
  //const { state, setState, dispatch } = useContext(DataAMD);
  const [errors, setErrors] = useState(false);
  const [createAMD, setCreateAMD] = useState(false);
  const [form, handlerChangeForm, resetForm] = useForm({
    grupo: "",
    materia: "",
    docente: "",
    ci: "",
    // num: "",
    ambiente: "",
  });
  // console.log("form AMD", form);
  const { grupo, materia, docente, ambiente, ci } = form;

  const handleSaveDate = (e) => {
    e.preventDefault();
    if (grupo === "" || materia === "" || docente === "" || ambiente === "") {
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
    // logica para guardar
    if (
      materia !== "Asigne un Materia" ||
      docente !== "Asigne un Docente" ||
      ambiente !== "Asigne un Ambiente"
    ) {
      dispatch(
        authRegisterAMD({ grupo, materia, docente, ambiente, ci: form.ci })
      );
      resetForm();
    }
  };
  let componente;
  if (errors) {
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
  //---------------------------peticion de buscar un usuario---------------------
  const [oneUser, setOneUSer] = useState({});
  useEffect(() => {
    const fuc = () => {
      dataUser.map((element) => {
        if (docente.includes(element.nombre) === true) {
          console.log(
            "encontro ------------------------=>",
            element.nombre,
            element.email,
            element._id,
            element.ci
          );
          //console.log("element", element);
          //--------peticion para ver un usuario---------
          const getUser = () => {
            fetch(endpointsAMD.listDocente.url + element._id, {
              method: endpointsAMD.listDocente.method,
              //Authorization: token,
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                // console.log("response", response);
                return response.json();
              })
              .then((data) => {
                // console.log("serverREsponse one user -> ");
                //  console.log("serverREsponse one user -> ", data.serverResponse);
                setOneUSer(data.serverResponse);
              });
          };
          getUser();
        }
      });
    };
    fuc();
  }, [dataUser, docente]);
  form.ci = oneUser.ci;
  console.log("result ONE USER--------------->", oneUser);
  console.log("result form--------------->", form);
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
        {
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
                <option defaultValue="sinvalor">Asigne un Ambiente</option>
                {listAmbiente.length > 0 ? (
                  listAmbiente.map((item) => {
                    return (
                      <>
                        <option key={item}>{item}</option>
                      </>
                    );
                  })
                ) : (
                  <option value="sinSemestre">
                    No existe ambientes creados
                  </option>
                )}
              </select>
            </div>
          </div>
        }
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

/*<option defaultValue="sin opcion">Elejir una opcion</option>
              <option value="opcion 1">opcion 1</option>
              <option value="opcion 2">opcion 2</option>
            <option value="opcion 3">opcion 3</option>*/

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
  */

/* const [preListAmbiente, setPreListAmbiente] = useState({});
        const [test, setTest] = useState([]);
        // console.log("serverREsponseAmb", data.serverResponse);
        //setPreListAmbiente(data.serverResponse);
        // setListAmbiente(data.serverResponse);
        // setTest(data.serverResponse);
        //
         //setListAmbiente(...[element.ambiente + " " + element.ubicacion]);7
          setListAmbiente([
            ...preListAmbiente,
            { colore: element.ambiente + " " + element.ubicacion },
          ]);*/
/*
        fuc();
         const fuc = () => {
          test.forEach((element) => {
            let ubi = element.Ubicacion;
            let amb = element.ambiente;

            element.ambiente = amb + " " + ubi;
            console.log("test amb -> ", element.ambiente);
            console.log("test ubi-> ", element.ubicacion);
          });
        };
        fuc();*/
//console.log("datosApiAMBIENTE", preListAmbiente);

// console.log("test -> ", test);
/*
    let num = 0;
    dispatch({
      type: ActionsH.ADD_FORM_AMD,
      payload: { ...form, id: uniqid() },
    });
    //setData(form, { id: uniqid() });*/
