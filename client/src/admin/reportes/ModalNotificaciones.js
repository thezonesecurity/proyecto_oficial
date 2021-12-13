import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { MdForwardToInbox } from "react-icons/md";

export default function ModalNotificaciones(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdForwardToInbox />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-dark">
            <thead>
              <tr>
                <th colSpan="2">Fecha:</th>
                <th colSpan="2">Asunto:</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-active">
                <td colSpan="2">{props.dataItem.createAt}</td>
                <td colSpan="2">{props.dataItem.asunto}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
