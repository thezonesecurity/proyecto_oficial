import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal } from "react-bootstrap";
import { ErrorValidacion } from "../../ErrorValidacion";
import { useSelector } from "react-redux";
import { endpointsD } from "../types/endPointsD";
import axios from "axios";

export const ModalRol = (props) => {
  console.log("props MODAL url -> ", props.dataItem);
  const [errors, setErrors] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //------------------------para las opciones de los roles
  const [valueRol, setValueRol] = useState({ valor: "" });
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    //setValueRol(e.target.value);

    console.log("Sigla---->", e.target.value);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log("value ROL", valueRol);
  //--------------------------para agregar a los inputs
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

  const handleSubmitEditSave = async (e) => {
    // data.metodoRol = valueRol;
    e.preventDefault();
    if (
      props.dataItem.nombreRol !== data.nombreRol ||
      (props.dataItem.metodoRol !== data.metodoRol) !== "" ||
      props.dataItem.url !== data.url
    ) {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      };
      console.log("config", data);
      //guarda en la BD
      const result = await axios
        .put(endpointsD.editRol.url + props.dataItem._id, data, config)
        .catch(function (error) {
          console.log(error);
        });

      // console.log("reult rol save", result);
      handleClose();
    } else {
      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 4000);
    }
  };
  console.log(" modal data -> ", data);
  //console.log("reult data url -> ", data.url);
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
          <Modal.Title>Editar Ambiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="nombreRol">Rol</label>
            <input
              type="text"
              name="nombreRol"
              id="nombreRol"
              name="nombreRol"
              value={data.nombreRol}
              onChange={handleChangeEdit}
            />
            <div className="form-group row">
              <label className="col-4 col-form">Metodo</label>
              <div className="col-6">
                <select
                  id="metodoRol"
                  className="form-select"
                  name="metodoRol"
                  value={valueRol}
                  onChange={handleChangeOption}
                >
                  <option defaultValue={data.metodoRol}>
                    {data.metodoRol}
                  </option>
                  <option value="get">get</option>
                  <option value="post">post</option>
                  <option value="put">put</option>
                  <option value="delete">delete</option>
                </select>
              </div>
            </div>
            <label htmlFor="url">Nombre url</label>
            <input
              type="text"
              name="url"
              id="url"
              value={data.url}
              onChange={handleChangeEdit}
            />
          </form>
          <br />
          {componente}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitEditSave}>
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
          console.log("reult", props.dataItem.url);
        };
        peticionUpdateUser();
        handleClose();
      }
      */
