import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";

import { endpointsAmbiente } from "./contants/enPointsAmbiente";
import { ErrorValidacion } from "../ErrorValidacion";

export const ModalAmbiente = (props) => {
  console.log("propsmodalAmbiente", props.dataItem);
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //config para los datos
  //---------------logica para hacer peticiomn getAmbiente--------------
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(endpointsAmbiente.verAmbiente.url + props.dataItem._id, {
      method: endpointsAmbiente.verAmbiente.method,
      headers: new Headers({
        //Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("data serverResponse", data.serverResponse);
        setData(data.serverResponse);
      });
    //console.log("datosMOdalAmbiente", data);
  }, [props.dataItem._id]);
  console.log("datosMOdalAmbiente", data);
  //---------------------para escribir en los inputs--------------------
  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  //--------------------Logica para guardar los datos editados-----------------
  const [errors, setErrors] = useState(false);
  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (
      props.dataItem.ambiente !== data.ambiente ||
      props.dataItem.ubicacion !== data.ubicacion
    ) {
      fetch(endpointsAmbiente.editarAmbiente.url + props.dataItem._id, {
        method: endpointsAmbiente.editarAmbiente.method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("save edit", data);
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
            <label htmlFor="ambiente">Ambiente</label>
            <input
              type="text"
              name="ambiente"
              id="ambiente"
              value={data.ambiente}
              onChange={handleChangeEdit}
            />
            <label htmlFor="ubicacion">Ubicaci??n</label>
            <input
              type="text"
              name="ubicacion"
              id="ubicacion"
              value={data.ubicacion}
              onChange={handleChangeEdit}
            />
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
