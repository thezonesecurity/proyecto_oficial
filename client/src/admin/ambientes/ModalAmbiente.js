import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";

import DataAmbiente from "./contex/AppContext";

export const ModalAmbiente = () => {
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //config para los datos
  const { state, dispatch } = useContext(DataAmbiente);
  //console.log("state", state);
  const { id, num, ambiente, ubicacion } = state[0];

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
            <label htmlFor="numero">Numero</label>
            <input type="text" readOnly name="num" id="num" value={num} />
            <label htmlFor="ambiente">Ambiente</label>
            <input type="text" name="materia" id="ambiente" value={ambiente} />
            <label htmlFor="ubicacion">Ubicación</label>
            <input
              type="text"
              name="ubicacion"
              id="ubicacion"
              value={ubicacion}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
