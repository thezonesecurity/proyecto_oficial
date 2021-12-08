import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";

import { endPointsS } from "./constants/endPointsS";
import { ErrorValidacion } from "../ErrorValidacion";

export const ModalSemestre = (props) => {
  console.log("propsModalSemestre ", props.dataItem);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-------------------------mensaje de cambios en los datos----------------
  const [errors, setErrors] = useState(false);
  let componente;
  if (errors) {
    componente = (
      <ErrorValidacion mensaje="Verifique, no se mofifico ningun dato" />
    );
  } else componente = null;
  ///--------------------------logica para ver un semestre----------------
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(endPointsS.verSemestre.url + props.dataItem._id, {
      method: endPointsS.verSemestre.method,
      headers: new Headers({
        //Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("dataserver", data.severResponse);
        setData(data.severResponse);
      });
    //console.log("datos", data);
  }, [props.dataItem._id]);
  console.log("datosApiModal", data);
  ///-------------------------------------------------------------------
  ///------------para escribir en los imputs--------------
  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  ///----------------------------------------------------
  ///-----------------para guardar lo editado--------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("guardado", data);
    if (
      props.dataItem.semestre !== data.semestre ||
      props.dataItem.año !== data.año
    ) {
      //se guarda los datos editados en la BD
      fetch(endPointsS.editarSemestre.url + props.dataItem._id, {
        method: endPointsS.editarSemestre.method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      handleClose();
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 5000);
    }
    console.log("Editado", data);
  };
  //------------------------------------------------------
  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Semestre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="num">Numero</label>
            <input type="text" readOnly name="num" id="num" value="1" />
            <br />
            <label htmlFor="semestre">Semestre</label>
            <input
              type="text"
              name="semestre"
              id="semestre"
              value={data.semestre}
              onChange={handleChangeEdit}
            />
            <br />
            <label htmlFor="año">Año:</label>
            <input
              type="number"
              name="año"
              id="año"
              value={data.año}
              onChange={handleChangeEdit}
            />
          </form>
          <br />
          {componente}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
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
