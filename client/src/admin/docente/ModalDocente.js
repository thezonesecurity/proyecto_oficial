import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

import DataDocente from "./contex/AppContext";
import { ErrorValidacion } from "../ErrorValidacion";
import { MessageCreateUser } from "../MessageCreateUser";
import { endpointsD } from "./types/endPointsD";
import { useSelector } from "react-redux";

export const ModalDocente = (props) => {
  console.log("modal", props.dataItem);
  const { _id } = props.dataItem;
  const { state, dispatch } = useContext(DataDocente);
  //const [data, setData] = useState(DataDocente);
  //console.log("modaldocente", state);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setErrors(false);
  }; //handleClose cierra el modal
  const handleShow = () => setShow(true); //handleShow abre el modal
  const stateob = Object.assign({}, state);

  //console.log("props modal doc", props.dataItem);
  //------------------------------LOGICA PARA VER UN USARIO-------------------------
  const [data, setData] = useState({});
  const { auth } = useSelector((state) => state);
  const { token } = auth;

  useEffect(() => {
    fetch(endpointsD.getUser.url + props.dataItem._id, {
      method: endpointsD.getUser.method,
      headers: new Headers({
        Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("dataSERVER", data.serverResponse);
        setData(data.serverResponse);
      });
    console.log("datosDATA", data);
  }, []);

  //------------------------------FIN LOGICA PARA VER UN USARIO-------------------------
  //console.log("datos api", data);
  //-------------------LOGICA PARA GUARDAR UN USUARIO MODIFICADO--------------------
  const [errors, setErrors] = useState(false);
  const [controlUser, setControlUser] = useState(false);

  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.nombre === "" ||
      data.apellidos === "" ||
      data.ci === "" ||
      data.email === "" ||
      data.direccion === "" ||
      data.telefono === "" ||
      data.carga_horaria === ""
    ) {
      setErrors(true);
      setControlUser(false);
      return;
    } else {
      setControlUser(true);
    }
    //actualiza datos--------------
    // console.log("save user", data);
    //const response = await axios.put(
    // `http://localhost:8000/api1.0/user/${_id}`,
    //data
    // );
    // console.log("update", response);

    /////--------------------------------------------------------
    fetch(endpointsD.editUser.url + props.dataItem._id, {
      method: endpointsD.editUser.method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Editado", data);
    ///--------------------------------------------------------
    setErrors(false);
    handleClose();
  };
  //para controlar si la tabla esta vacia
  let componente;
  if (errors) {
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let updated;
  if (controlUser) {
    updated = <MessageCreateUser mensaje="Docente actualizado correctamente" />;
  } else updated = null;
  //-------------------LOGICA PARA GUARDAR UN USUARIO MODIFICADO--------------------
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
              id="nombre"
              value={data.nombre}
              onChange={handleChangeEdit}
              placeholder="Escribe tu nombre"
            />
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              id="apellidos"
              value={data.apellidos}
              onChange={handleChangeEdit}
              placeholder="1r Apellido"
            />
            <label htmlFor="ci">CI</label>
            <input
              type="text"
              name="ci"
              id="ci"
              value={data.ci}
              onChange={handleChangeEdit}
              placeholder="8745269"
            />
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChangeEdit}
              placeholder="email"
            />
            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              name="direccion"
              id="direccion"
              value={data.direccion}
              onChange={handleChangeEdit}
              placeholder="calle oruro #15"
            />
            <label htmlFor="telefono">Telefono</label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              value={data.telefono}
              onChange={handleChangeEdit}
              placeholder="79727515"
            />
            <label htmlFor="carga_horaria">C. Horaria</label>
            <input
              id="carga_horaria"
              name="carga_horaria"
              type="number"
              value={data.carga_horaria}
              onChange={handleChangeEdit}
              placeholder="ej. 45 min"
            />
          </form>
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
