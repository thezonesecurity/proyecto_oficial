import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";

export const ModalMensajes = (props) => {
  console.log("propsMOdal", props.dataItem);
  const [valueMensajes, setValueMensajes] = useState(props.dataItem);
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // para poder escribir en los inputs
  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setValueMensajes((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  //--------------------------lógica para guardar los datos editados----------------------
  //const [errors, setErrors] = useState(false);
  /*const handleSaveEdit = (e) => {
    e.preventDefault();
    if (
      props.dataItem.materia !== data.materia ||
      props.dataItem.semestre !== data.semestre ||
      props.dataItem.sigla !== data.sigla ||
      props.dataItem.carga_horaria !== data.carga_horaria
    ) {
      //aqui se manda datos editados ala BD
      fetch(endpointsM.editarMateria.url + props.dataItem._id, {
        method: endpointsM.editarMateria.method,
        body: JSON.stringify(data),
        headers: {
          // Authorization: token,
          "Content-Type": "application/json",
        },
      });
      //console.log("save edit", data);
      handleClose();
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 5000);
    }
  };*/
  //--------------------------FIN lógica para guardar los datos editados----------------------
  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="nombre">De:</label>
            <input
              type="text"
              name="materia"
              id="materia"
              value={valueMensajes.de}
              onChange={handleChangeEdit}
            />
            <label htmlFor="apellidos">Para:</label>
            <input
              type="text"
              name="sigla"
              id="sigla"
              value={valueMensajes.para}
              onChange={handleChangeEdit}
            />
            <label htmlFor="ci">Asunto</label>
            <input
              type="text"
              name="carga_horaria"
              id="carga_horaria"
              value={valueMensajes.asunto}
              onChange={handleChangeEdit}
            />
          </form>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Reenviar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
