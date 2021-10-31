import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate, MdDeleteSweep } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import DataDocente from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
export const ModalDocente = () => {
  const { state, dispatch } = useContext(DataDocente);

  const [data, setData] = useState(DataDocente);

  console.log("modaldocente", state);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const stateob = Object.assign({}, state);
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
  } = stateob[0];

  console.log("listados", stateob);
  //console.log("nombres", state);

  /*const editar = (dato) => {
    var contador = 0;
    var arreglo = state.form;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellidos = dato.apellidos;
        arreglo[contador].ci = dato.ci;
        arreglo[contador].email = dato.email;
        arreglo[contador].direccion = dato.direccion;
        arreglo[contador].telefono = dato.telefono;
        arreglo[contador].carga_horaria = dato.carga_horaria;
      }
      contador++;
    });
    this.setState({ form: arreglo });
  };*/

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
            />

            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              id=""
              value={apellidos}
              placeholder="1r Apellido"
            />
            <label htmlFor="ci">CI</label>
            <input
              type="text"
              name="ci"
              id=""
              value={ci}
              placeholder="8745269"
            />
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              value=""
              id="email"
              value={email}
              placeholder="email"
            />

            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              name="direccion"
              id=""
              value={direccion}
              placeholder="calle oruro #15"
            />

            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              value={telefono}
              placeholder="79727515"
            />

            <label htmlFor="carga_horaria">C. Horaria</label>
            <input
              name="carga_horaria"
              type="number"
              value={carga_horaria}
              placeholder="ej. 45 min"
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
