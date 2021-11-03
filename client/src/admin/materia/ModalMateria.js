import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import DataMateria from "./contex/AppContext";

export const ModalMateria = () => {
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //config para los datos
  const { state, dispatch } = useContext(DataMateria);
  //console.log("state", state);
  const { id, materia, sigla, num, carga_horaria } = state[0];
  //esta parte sera para guardar los datos
  const editData = (dato) => {
    let contador = 0;
    let lista = state;
    lista.map((registro) => {
      if (dato.id === registro.id) {
        lista[contador].materia = dato.materia;
        lista[contador].sigla = dato.sigla;
        lista[contador].carga_horaria = dato.carga_horaria;
      }
      contador++;
      handleClose();
    });
  };
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
            <label htmlFor="nombre">Numero</label>
            <input type="text" readOnly name="num" id="num" value={num} />
            <label htmlFor="nombre">Materia</label>
            <input type="text" name="materia" id="materia" value={materia} />
            <label htmlFor="apellidos">Sigla</label>
            <input type="text" name="sigla" id="sigla" value={sigla} />
            <label htmlFor="ci">Carga Horaria</label>
            <input
              type="text"
              name="carga_horaria"
              id="carga_horaria"
              value={carga_horaria}
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
