import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

import { endpointsH } from "./types/endPointsH";

export default function ModalListaHorario(props) {
  //console.log("modal", props.dataItem._id);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //////----------------------------logica para ver un Horario-----------------------------------
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(endpointsH.getHorarios.url + props.dataItem._id, {
      method: endpointsH.getHorarios.method,
      headers: new Headers({
        //Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("dataserver", data.serverResponse);
        setData(data.serverResponse);
      });
    //console.log("datos", data);
  }, [props.dataItem._id]);
  ////----------------------------------fin logica----------------------------------------------
  ///------------para escribir en los imputs--------------
  const handleChangeEdit = (e) => {
    console.log("Sigla---->", e.target.value);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  ///-------------------------fin------------------------------
  ///----------------------Mostrar Materia---------------------------
  const [dataMateria, setDataMateria] = useState([]);
  useEffect(() => {
    const Materia = async () => {
      const data = await axios
        .get(endpointsH.verMateria.url)
        .catch(function (error) {
          console.log(error);
        });
      // console.log("resultMateria", data.data.serverResponse);
      setDataMateria(data.data.serverResponse);
      // console.log("server", data.data.serverResponse);
    };
    Materia();
  }, []);
  //console.log("datosApiMateria", dataMateria);
  ///-----------------------Fin mostrar Materia----------------------
  ///-----------------------Mostrar Ambiente-------------------------
  const [listAmbiente, setListAmbiente] = useState({});
  useEffect(() => {
    fetch(endpointsH.verAmbiente.url, {
      method: endpointsH.verAmbiente.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("serverREsponseAmbiente", data.serverResponse);
        setListAmbiente(data.serverResponse);
      });
    // console.log("datosApiAmbiente", listAmbiente);
  }, []);
  ///------------------------Fin mostrar Ambiente--------------------
  ///-----------------para guardar lo editado--------------
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("guardado", data);
    fetch(endpointsH.editHorarios.url + props.dataItem._id, {
      method: endpointsH.editHorarios.method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Editado", data);
    handleClose();
  };
  //-----------------------fin editado-------------------------------
  return (
    <>
      <Button color="success" className="nextButton" onClick={handleShow}>
        +
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Insertar Materia</Modal.Title>
        </Modal.Header>
        <form>
          <div className="subform">
            <label>Hora</label>
            <input
              type="text"
              name="hora"
              id="hora"
              readOnly
              value={data.hora}
              onChange={handleChangeEdit}
            />
            <div className="form-group row">
              <label className="col-2 col-form">Lunes</label>
              <div className="col-8">
                <select
                  id="lunes"
                  name="lunes"
                  className="form-select"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue={props.dataItem.lunes}>
                    {props.dataItem.lunes}
                  </option>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {dataMateria.length > 0 ? (
                    dataMateria.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.sigla}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">No existe materias</option>
                  )}
                </select>
              </div>
            </div>
            {/*  <div className="col-6">
                <select
                  id="lunes"
                  name="lunes"
                  className="form-select"
                  onChange={handleChangeEditAmbiente}
                >
                  {listAmbiente.length > 0 ? (
                    listAmbiente.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.ambiente}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">
                      No existe materias creadas
                    </option>
                  )}
                </select>
                  </div>*/}

            {/*  <input
              type="text"
              name="lunes"
              id="lunes"
              value={data.lunes}
              onChange={handleChangeEdit}
          />*/}

            <div className="form-group row">
              <label className="col-2 col-form">Martes</label>
              <div className="col-8">
                <select
                  id="martes"
                  name="martes"
                  className="form-select"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue={props.dataItem.martes}>
                    {props.dataItem.martes}
                  </option>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {dataMateria.length > 0 ? (
                    dataMateria.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.sigla}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">No existe materias</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-2 col-form">Miercoles</label>
              <div className="col-8">
                <select
                  id="miercoles"
                  name="miercoles"
                  className="form-select"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue={props.dataItem.miercoles}>
                    {props.dataItem.miercoles}
                  </option>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {dataMateria.length > 0 ? (
                    dataMateria.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.sigla}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">No existe materias</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-2 col-form">Jueves</label>
              <div className="col-8">
                <select
                  id="jueves"
                  name="jueves"
                  className="form-select"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue={props.dataItem.jueves}>
                    {props.dataItem.jueves}
                  </option>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {dataMateria.length > 0 ? (
                    dataMateria.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.sigla}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">No existe materias</option>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-2 col-form">Viernes</label>
              <div className="col-8">
                <select
                  id="viernes"
                  name="viernes"
                  className="form-select"
                  onChange={handleChangeEdit}
                >
                  <option defaultValue={props.dataItem.viernes}>
                    {props.dataItem.viernes}
                  </option>
                  <option value="Sin Asignar">Sin Asignar</option>
                  {dataMateria.length > 0 ? (
                    dataMateria.map((item) => {
                      return (
                        <>
                          <option key={item._id}>{item.sigla}</option>;
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">No existe materias</option>
                  )}
                </select>
              </div>
            </div>
          </div>
        </form>
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
}

/*
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "../../materia/hooks/useForm";
import DataHorario from "./contex/AppContexH";
import { ActionsH } from "./constants/ActionsH";
//import { useDispatch } from "react-redux";

export default function ModalListaHorario() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const dispatch = useDispatch();
  const materiah = useContext(DataHorario);
  //const { state, dispatch } = useContext(DataHorario);
  const { stateH, dispatchH } = useContext(DataHorario);
  //console.log("state", state);
  const [form, handlerChangeForm, resetForm] = useForm({
    materia: "",
    state: false,
  });
  const { materia } = form;
  //console.log("form", form);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatchH({
      type: ActionsH.ADD_MATERIA,
      payload: { ...form, id: new Date().getTime() },
    });
    resetForm();
  };

  return (
    <>
      <Button color="success" className="nextButton" onClick={handleShow}>
        +
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Insertar Materia</Modal.Title>
        </Modal.Header>
        <form>
          <label htmlFor="materia">Materia</label>
          <input
            type="text"
            name="materia"
            id="materia"
            value={materia}
            onChange={handlerChangeForm}
          />
        </form>
        <Modal.Footer>
          <Button onClick={handlerSubmit}>Save Changes</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
*/

/*
   const [amb, setAmb] = useState();

  const [sig, setSig] = useState();
  const handleChangeEditAmbiente = (e) => {
    console.log("Ambiente---->", e.target.value);
    setAmb((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log("ambiente", amb);
  console.log("sigla", sig);

  const test = [amb && sig];
  // const [test, setTest] = useState(amb, sig);
  //setTest(amb , sig);
  console.log("test", test);
*/

/* fetch(endpointsH.verMateria.url + props.dataItem._id, {
      method: endpointsH.verMateria.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((dato) => {
        console.log("serverREsponseMateria", dato);
        //setDataMateria(data.serverResponse);
      });*/
