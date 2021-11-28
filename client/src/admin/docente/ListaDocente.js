import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { ContenidoLista } from "./ContenidoLista";
import DataDocente from "./contex/AppContext";
import { actions } from "./contants/actions";

export const ListaDocente = () => {
  //------------------------------LOGICA PARA LISTAR USARIOS-------------------------
  const [dataUser, setDataUser] = useState({});
  useEffect(() => {
    const peticionGet = async () => {
      const result = await axios
        .get("http://192.168.1.112:8000/api1.0/user/")
        .then((item) => {
          //console.log(item.data.serverResponse);
          setDataUser(item.data.serverResponse);
        })
        .catch(function (error) {
          console.log(error);
        });
      // console.log("datos", dataUser);
    };
    peticionGet();
  }, []);
  //------------------------------LOGICA PARA LISTAR USARIOS-------------------------
  //console.log("datosItem", dataUser);
  //-----------------------------------------------------------------------------------------
  //para agregar dataUser al contex y asi tener los datos en el state
  /*
  const { state, dispatch } = useContext(DataDocente);
  let data = dataUser;
  const test = () => {
    dispatch({
      type: actions.ADD_FORM,
      payload: { data },
    });
  };
  test();
  /*
  componentDidUpdate(
    (test = () => {
      dispatch({
        type: actions.ADD_FORM,
        payload: { data },
      });
    }),
    test()
  );
    console.log("stateDoc", state);
  */

  return (
    <>
      <h4 className="titleForm">Listado de Docentes</h4>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">C.I.</th>
            <th scope="col">E-mail</th>
            <th scope="col">Direccion</th>
            <th scope="col">telefono</th>
            <th scope="col">Carga horaria</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>

        {dataUser.length > 0 ? (
          dataUser.map((item) => {
            return <ContenidoLista key={item._id} {...item} />;
          })
        ) : (
          <tbody>
            <tr className="table-active">
              <td colSpan="9">No hay Docentes registrados...</td>
            </tr>
          </tbody>
        )}
      </table>
      <button type="button" className="btn btn-dark">
        Imprimir
      </button>
    </>
  );
};
