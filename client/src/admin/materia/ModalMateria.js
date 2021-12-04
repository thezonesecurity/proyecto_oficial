import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdCreate } from "react-icons/md";
import { Button, Modal, NavItem } from "react-bootstrap";
//import DataMateria from "./contex/AppContext";
import DataMateria from "./contex/AppContext";
import { useForm } from "./hooks/useForm";
import { endpointsM } from "./constants/endPointsM";
import axios from "axios";
import { ErrorValidacion } from "../ErrorValidacion";

export const ModalMateria = (props) => {
  console.log("propsMOdal", props.dataItem);
  const [valueSemestre, setValueSemestre] = useState(props.dataItem.semestre);
  const handleChangeOption = (e) => {
    e.preventDefault();
    //console.log("value", e.target.value);
    setValueSemestre(e.target.value);
  };
  console.log("valueSemestre", valueSemestre);
  //config para el modal
  //------------------peticion al servidor de listas semestre---------------
  const [dataSemestre, setDataSemestre] = useState({});
  useEffect(() => {
    const listData = async () => {
      const data = await axios
        .get(endpointsM.listMatSemestre.url)
        .catch(function (error) {
          console.log(error);
        });
      //console.log("result", data);
      setDataSemestre(data.data.severResponse);
      // console.log("server", data.data.severResponse);
    };
    listData();
  }, []);
  //console.log("serverModalSemestre", dataSemestre);
  //------------------FIN al servidor de listas semestre---------------

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //config para los datos

  //-----------------. lógica para ver materias de la api-----------------------------
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(endpointsM.verMateria.url + props.dataItem._id, {
      method: endpointsM.verMateria.method,
      headers: new Headers({
        // Authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        // console.log("serverREsponse", data.serverResponse);
        setData(data.serverResponse);
      });
    //console.log("datosApi", dataMateria);
  }, []);
  //console.log("dataMOdal", data);
  //-----------------.FIN lógica para ver materias de la api-----------------------------
  // para poder escribir en los inputs
  console.log("dataMOdal", data);
  const handleChangeEdit = (e) => {
    // console.log(e.target.name);
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  //--------------------------lógica para guardar los datos editados----------------------
  data.semestre = valueSemestre;
  const [errors, setErrors] = useState(false);
  const handleSaveEdit = (e) => {
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
  };
  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique, no se modifico ningun dato" />
    );
  } else componente = null;
  //--------------------------FIN lógica para guardar los datos editados----------------------
  /*
  //////////////////////////////////////////
  const { state, setState, dispatch } = useContext(DataMateria);
  const [form, handlerChangeForm, reserForm] = useForm({
    id: props.id,
    materia: props.materia,
    sigla: props.sigla,
    carga_horaria: props.carga_horaria,
  });

  console.log("form", form);
  const { id, materia, sigla, carga_horaria } = form;

  const handlerChange = (e) => {
    // console.log("e -> ", e.target.value);
    //let change = { ...form, [e.target.name]: e.target.value };
    setState({ [e.target.name]: e.target.value });
  };

  //console.log("edit", edit);
  const  handleSutmitEditData= (e) => {
    e.preventDefault();
    console.log("State", state);
  };
  */
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
            <input
              type="text"
              readOnly
              name="num"
              id="num"
              value="1"
              onChange={handleChangeEdit}
            />
            <label htmlFor="nombre">Materia</label>
            <input
              type="text"
              name="materia"
              id="materia"
              value={data.materia}
              onChange={handleChangeEdit}
            />
            <label htmlFor="apellidos">Sigla</label>
            <input
              type="text"
              name="sigla"
              id="sigla"
              value={data.sigla}
              onChange={handleChangeEdit}
            />
            <label htmlFor="ci">Carga Horaria</label>
            <input
              type="text"
              name="carga_horaria"
              id="carga_horaria"
              value={data.carga_horaria}
              onChange={handleChangeEdit}
            />
            <div className="form-group row">
              <label className="col-4 col-form">Semestre</label>
              <div className="col-6">
                <select
                  id="semestre"
                  className="form-select"
                  value={data.semestre}
                  onChange={handleChangeOption}
                >
                  {dataSemestre.length > 0 ? (
                    dataSemestre.map((item) => {
                      return (
                        <>
                          <option value={item.semestre}>{item.semestre}</option>
                        </>
                      );
                    })
                  ) : (
                    <option value="sinSemestre">
                      No existe semestres creados
                    </option>
                  )}
                </select>
              </div>
            </div>
          </form>
          <br />
          {componente}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveEdit}>
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
