import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal, NavItem } from "react-bootstrap";
import DataSemestre from "./contex/AppContexSemestre";
import { useFormSemestre } from "./hooks/useFormSemestre";

//import DataMateria from "./contex/AppContext";

export const ModalSemestre = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///////
  const { state, setState, dispatch } = useContext(DataSemestre);
  const [form, handlerChangeForm, reserForm] = useFormSemestre({
    num: props.num,
    semestre: props.semestre,
    año: props.año,
  });
  const { num, semestre, año } = form;

  //////
  const handlerChange = (e) => {
    //console.log("e -> ", e.target.value);
    //let change = { ...form, [e.target.name]: e.target.value };
    setState({ [e.target.name]: e.target.value });
  };

  const handleSutmitEditData = (e) => {
    e.preventDefault();
    console.log("state", state);
  };
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
          <form onSubmit={handlerChange}>
            <label htmlFor="num">Numero</label>
            <input
              type="text"
              readOnly
              name="num"
              id="num"
              value={num}
              onChange={handlerChangeForm}
            />
            <br />
            <label htmlFor="semestre">Semestre</label>
            <input
              type="text"
              name="semestre"
              id="semestre"
              value={semestre}
              onChange={handlerChangeForm}
            />
            <br />
            <label htmlFor="año">Año:</label>
            <input
              type="number"
              name="año"
              id="año"
              value={año}
              onChange={handlerChangeForm}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSutmitEditData}>
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
