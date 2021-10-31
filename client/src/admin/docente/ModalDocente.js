import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import DataDocente from "./contex/AppContext";
export const ModalDocente = () => {
  const { state, dispatch } = useContext(DataDocente);
  console.log("modaldocente", state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    num,
    nombre,
    apellidos,
    ci,
    email,
    direccion,
    telefono,
    carga_horaria,
    id,
  } = state;
  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Docente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id=""
              value={nombre}
              placeholder="Escribe tu nombre"
              onChange=""
            />

            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              id=""
              value=""
              placeholder="1r Apellido"
              onChange=""
            />
            <label htmlFor="ci">CI</label>
            <input
              type="text"
              name="ci"
              id=""
              value=""
              placeholder="8745269"
              onChange=""
            />
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              value=""
              onChange=""
              id="email"
              value=""
              placeholder="email"
              onChange=""
              required
            />

            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              name="direccion"
              id=""
              value=""
              placeholder="calle oruro #15"
              onChange=""
            />

            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              value=""
              placeholder="79727515"
              onChange=""
            />

            <label htmlFor="carga_horaria">C. Horaria</label>
            <input
              name="carga_horaria"
              type="number"
              value=""
              placeholder="ej. 45 min"
              onChange=""
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
