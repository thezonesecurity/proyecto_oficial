import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal, NavItem } from "react-bootstrap";
//import DataMateria from "./contex/AppContext";
import DataMateria from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import { hasClass } from "dom-helpers";
import { ListaMateria } from "./ListaMateria";
import { Actions } from "./constants/Actions";

export const ModalMateria = (props) => {
  //console.log("props", props);
  //config para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //config para los datos
  //console.log("state", state);
  //--------------------------------
  const { state, setState, dispatch } = useContext(DataMateria);
  const [form, handlerChangeForm, reserForm] = useForm({
    materia: props.materia,
    sigla: props.sigla,
    carga_horaria: props.carga_horaria,
  });

  console.log("state", form);
  const { id, materia, sigla, carga_horaria } = form;

  /* const edit = state.map((item) =>
    item.id === id
      ? {
          id,
          materia: props,
          sigla: props,
          carga_horaria: props,
        }
      : item
  );
  setState(edit);

  */

  const editData = (e) => {
    e.preventDefault();
  };
  /* dispatch({
      type: Actions.EDDIT_FORM_M,
      payload: {
        ...form,
        id,
        materia: props,
        sigla: props,
        carga_horaria: props,
      },
    });

    handleClose();
  };*/

  //--------------------------
  //console.log("materia", state);
  //console.log("MoDALmateria", form);
  //esta parte sera para guardar los datos
  //-------------------------------
  //esto es para recuperar datos de la edicion
  /*
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
    });
    dispatch({
      type: Actions.EDDIT_FORM_M,
      payload: {
        ...(state
          ? {
              id,
              materia: props.materia,
              sigla: props.sigla,
              carga_horaria: props.carga_horaria,
            }
          : dato),
      },
    });
    handleClose();
  };*/

  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Materia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="nombre">Numero</label>
            <input type="text" readOnly name="num" id="num" value={props.num} />
            <label htmlFor="nombre">Materia</label>
            <input
              type="text"
              name="materia"
              id="materia"
              value={materia}
              onChange={handlerChangeForm}
            />
            <label htmlFor="apellidos">Sigla</label>
            <input
              type="text"
              name="sigla"
              id="sigla"
              value={sigla}
              onChange={handlerChangeForm}
            />
            <label htmlFor="ci">Carga Horaria</label>
            <input
              type="text"
              name="carga_horaria"
              id="carga_horaria"
              value={carga_horaria}
              onChange={handlerChangeForm}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editData}>
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

/*
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
*/

/*
 {state.map((item) => {
            item.id === props.id ? (
              <form>
                <label htmlFor="nombre">Numero</label>
                <input type="text" readOnly name="num" id="num" value={num} />
                <label htmlFor="nombre">Materia</label>
                <input
                  type="text"
                  name="materia"
                  id="materia"
                  value={materia}
                />
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
            ) : (
              <form>
                <label>No hay materias para editar</label>
              </form>
            );
          })}
*/

{
  /** my codigo
 const [materia, setMateria] = useState(props.materia);
  const [sigla, setSigla] = useState(props.sigla);
  const [carga_horaria, setstateCarga_horaria] = useState(props.carga_horaria);

  const PrimeraEdicion = (objeto) => {
    handleShow();
    setMateria(objeto.materia);
    setSigla(objeto.sigla);
    setstateCarga_horaria(objeto.carga_horaria);
  };
  const EdicionFinal = (e) => {
    e.preventDefault();
    const lista = props;
    const editado = lista.map((item) =>
      item.materia === materia ? { materia, sigla, carga_horaria } : item
    );
  };
*/
}
