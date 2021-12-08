import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ContenidoLista } from "./ContenidoLista";
import { endpointsD } from "./types/endPointsD";

export const ListaUsuario = () => {
  //------------------------------LOGICA PARA LISTAR USARIOS-------------------------
  const [dataUser, setDataUser] = useState([]);
  const { auth } = useSelector((state) => state);
  const { token } = auth;
  console.log("token", token);
  //192.168.1.112
  /*"http://localhost:8000/api1.0/user/"
  
  endpointsD.listUsers.url
  endpointsD.listUsers.method*/
  //const [data, setData] = useState({});

  useEffect(() => {
    const listData = async () => {
      const data = await axios
        .get(endpointsD.listUsers.url)
        .catch(function (error) {
          console.log(error);
        });
      //console.log("result", data);
      setDataUser(data.data.serverResponse);
      console.log("server", data.data.serverResponse);
    };
    listData();

    /* fetch("http://localhost:8000/api1.0/user/", {
      method: "GET",
      headers: new Headers({
        authorization: token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log("serverREsponse", data.serverResponse);
        setDataUser(data.serverResponse);
      });
    //console.log("datosApi", dataUser);*/
  }, []);

  //------------------------------FIN LOGICA PARA LISTAR USARIOS-------------------------
  //console.log("datosItem", dataUser);

  return (
    <>
      <h4 className="titleForm">Listado de Usuarios</h4>
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
            <th scope="col">Rol</th>
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
              <td colSpan="10">No hay Usuarios registrados...</td>
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

/*
 const peticionGet = async () => {
  const result = await axios
    .get("http://localhost:8000/api1.0/user/")
    .then((item) => {
      //console.log(item.data.serverResponse);
      setDataUser(item.data.serverResponse);
    })
    .catch(function (error) {
      console.log(error);
    });
  // console.log("datos", dataUser);
};
peticionGet(); */

/*
    fetch("http://192.168.1.112:8000/api1.0/user/", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this is the data we get after doing the delete request, do whatever you want with this data
        console.log(data);
        setDataUser(data);
      });*/

//-----------------------------------------------------------------------------------------
//para agregar dataUser al contex y asi tener los datos en el state
/*
  const { state, dispatch } = useContext(DataUsuario);
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
