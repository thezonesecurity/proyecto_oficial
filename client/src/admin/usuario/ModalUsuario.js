import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

import { ErrorValidacion } from "../ErrorValidacion";
import { endpointsD } from "./types/endPointsD";
import { useSelector } from "react-redux";

export const ModalUsuario = (props) => {
  console.log("modalPropsUsuario -> ", props.dataItem);
  const [errors, setErrors] = useState(false);
  //const { state, dispatch } = useContext(DataUsuario);
  //const [data, setData] = useState(DataUsuario);
  //console.log("modaldocente", state);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setErrors(false);
  }; //handleClose cierra el modal
  const handleShow = () => setShow(true); //handleShow abre el modal
  // const stateob = Object.assign({}, state);
  //console.log("props modal doc", props.dataItem);
  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  //-------------------LOGICA PARA GUARDAR UN USUARIO MODIFICADO--------------------
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  const [data, setData] = useState(props.dataItem);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      props.dataItem.nombre !== data.nombre ||
      props.dataItem.apellidos !== data.apellidos ||
      props.dataItem.ci !== data.ci ||
      props.dataItem.email !== data.email ||
      props.dataItem.telefono !== data.telefono ||
      props.dataItem.direccion !== data.direccion ||
      props.dataItem.carga_horaria !== data.carga_horaria ||
      props.dataItem.rolUser !== data.rolUser
    ) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      };
      console.log("config", config);
      if (data.rolUser !== "Docente") {
        data.carga_horaria = "0";
        const peticionUpdateUser = async () => {
          const result = await axios
            .put(endpointsD.editUser.url + props.dataItem._id, data, config)
            .catch(function (error) {
              console.log(error);
            });
          console.log("reult", result);
        };
        peticionUpdateUser();
        handleClose();
      } else {
        const peticionUpdateUser = async () => {
          const result = await axios
            .put(endpointsD.editUser.url + props.dataItem._id, data, config)
            .catch(function (error) {
              console.log(error);
            });
          console.log("reult", result);
        };
        peticionUpdateUser();
        handleClose();
      }
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
    }
  };
  console.log("EditadoSave modal user -> ", data);
  //-------------------FIN LOGICA PARA GUARDAR UN USUARIO MODIFICADO--------------------
  let componente;
  if (errors) {
    componente = (
      <ErrorValidacion mensaje="Verifique, no se modifico ningun dato" />
    );
  } else componente = null;

  return (
    <>
      <Button className="btn btn-outline-secondary btn-sm" onClick={handleShow}>
        <MdCreate />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group row">
              <label className="col-4 col-form">Asignar Rol</label>
              <div className="col-7">
                <select
                  id="rolUser"
                  className="form-select"
                  value={data.rolUser}
                  name="rolUser"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue="elegirRol">Designar Rol</option>
                  <option value="Admin">Administrador</option>
                  <option value="Docente">Docente</option>
                  <option value="Estudiante">Estudiante</option>
                </select>
              </div>
            </div>
            {data.rolUser === "Docente" && (
              <div className="bordesInputs">
                <label htmlFor="carga_horaria">Carga Hrs.</label>
                <input
                  name="carga_horaria"
                  type="number"
                  value={data.carga_horaria}
                  placeholder="ej. 45 min"
                  onChange={handleChangeEdit}
                />
              </div>
            )}
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
//------------------------------LOGICA PARA VER UN USARIO-------------------------
// console.log("dataVacio", data);
/*
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    fetch(endpointsD.getUser.url + props.dataItem._id, {
      method: endpointsD.getUser.method,
      headers: new Headers({
        //Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("data serverResponse", data.serverResponse);
        setDataUser(data.serverResponse);
      });
    //console.log("datosMOdalAmbiente", data);
  }, [props.dataItem._id]);*/

/*
  useEffect(() => {
    const peticionGetUser = async () => {
      const result = await axios
        .get(endpointsD.getUser.url + props.dataItem._id, token)
        .catch(function (error) {
          console.log(error);
        });

      console.log("reultDataApi", result);
      //setDataUser(result);
    };
    peticionGetUser();
  }, []);
  console.log("dataApiModalUser", dataUser);
  */
//------------------------------FIN LOGICA PARA VER UN USARIO-------------------------

/*fetch(endpointsD.editUser.url + props.dataItem._id, {
      method: endpointsD.editUser.method,
      body: JSON.stringify(data),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    console.log("EditadoSave", data);
    console.log("token", token);
    console.log("propsid", props.dataItem._id);*/
///--------------------------------------------------------
//actualiza datos--------------
// console.log("save user", data);
//const response = await axios.put(
// `http://localhost:8000/api1.0/user/${_id}`,
//data
// );
// console.log("update", response)
