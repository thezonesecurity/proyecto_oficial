import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import { endpointsAMD } from "./horarios/constants/endPointsAMD";
import { useForm } from "../ambientes/hooks/useForm";
import { ErrorValidacion } from "../ErrorValidacion";

export const ModalAMD = (props) => {
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //---------------------------peticion de lista usuarios---------------------
  const [dataUser, setDataUser] = useState({});
  useEffect(async () => {
    await fetch(endpointsAMD.listDocente.url, {
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
        console.log("serverREsponse modal AMD user", data.serverResponse);
        setDataUser(data.serverResponse);
      });
    // console.log("datosApiUser", dataUser);
  }, []);
  console.log("datosApiUSER modal AMD", dataUser);
  //---------------------------peticion de lista materias---------------------
  const [dataMateria, setDataMateria] = useState({});
  useEffect(async () => {
    await fetch(endpointsAMD.listMateria.url, {
      method: endpointsAMD.listMateria.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        console.log("datosApi amd", response);
        return response.json();
      })
      .then((data) => {
        console.log("serverREsponse amd modal", data.serverResponse);
        setDataMateria(data.serverResponse);
      });
    // console.log("datosApi amd", dataMateria);
  }, []);
  console.log("datosApiMATERIA modal AMD", dataMateria);

  //--------------------------------para escribir en los inputs----------------------------
  const [form, handlerChangeForm, resetForm] = useForm({
    grupo: props.dataItem.grupo,
    materia: props.dataItem.materia,
    docente: props.dataItem.docente,
    // sigla: "",
    // num: "",
    // ambiente: "",
  });
  const { grupo, materia, docente } = form;
  console.log("form modal AMD", form);
  //------------------------logica para guardar los datos editados--------------------------
  console.log(
    props.dataItem.grupo,
    "->",
    props.dataItem.materia,
    "->",
    props.dataItem.materia
  );
  const [errors, setErrors] = useState(false);
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (
      props.dataItem.grupo !== grupo ||
      props.dataItem.materia !== materia ||
      props.dataItem.docente !== docente
    ) {
      await fetch(endpointsAMD.updateAMD.url + props.dataItem._id, {
        method: endpointsAMD.updateAMD.method,
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("save edit AMD", form);
      handleClose();
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
    }
  };
  //console.log("state", state);
  //const { state, dispatch } = useContext(DataAmbiente);
  //const { id, num, ambiente, ubicacion } = state;

  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique, no se modificaron ningun dato" />
    );
  } else componente = null;
  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Ambiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="grupo">Grupo</label>
            <input
              type="text"
              name="grupo"
              id="grupo"
              value={grupo}
              onChange={handlerChangeForm}
            />
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
                  <option defaultValue={props.dataItem.materia}>
                    {props.dataItem.materia}
                  </option>
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
                    <option value="sinSemestre">
                      No existe materias creadas
                    </option>
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
                  <option defaultValue={props.dataItem.docente}>
                    {props.dataItem.docente}
                  </option>
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
                    <option value="sinSemestre">
                      No existe materias creadas
                    </option>
                  )}
                </select>
              </div>
            </div>
          </form>
          <br />
          {componente}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
