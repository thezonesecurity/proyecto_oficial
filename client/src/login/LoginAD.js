import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { MdAttachEmail, MdVpnKey } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useForm } from "./hooks/useForm";
import { auth, authAsync } from "./actions/auth";
import { endpointsL } from "./types/endPointsL";
import { ErrorValidacion } from "../admin/ErrorValidacion";
import userEvent from "@testing-library/user-event";

//import { useSelector } from "react-redux";
export const LoginAD = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
      dispatch(auth(token));
    } else {
      //esto aumente log
      console.log("la credenciales no son validas");
      return;
    }
  }, [dispatch]);
  ///-------------------logica para controlar las credenciales--------------------------

  const { auth: authRename, msnerror } = useSelector((state) => state);
  const { token } = authRename;
  const [form, handlerChangeForm] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;
  console.log("formmmm", form);

  ///----------------------------------------

  //-------------------- peticion de listar usuarios-----------------------
  const [dataUser, setDataUser] = useState([]);
  const [User, setUser] = useState({});
  useEffect(() => {
    const listData = async () => {
      const data = await axios
        .get(endpointsL.listUsers.url)
        .catch(function (error) {
          console.log(error);
        });
      //console.log("result", data);
      setDataUser(data.data.serverResponse);
      //console.log("serverLOgin", data.data.serverResponse);
    };
    listData();
  }, [email]);
  console.log("serverLOgin", dataUser);
  console.log("email", form.email);

  useEffect(() => {
    const fuc = () => {
      dataUser.map((element) => {
        if (form.email === element.email) {
          console.log("encontro", element.nombre, element.email, element._id);
          console.log("element", element);
          //-----------------peticion para ver un usuario------------------------
          const getUser = () => {
            fetch(endpointsL.verUser.url + element._id, {
              method: endpointsL.verUser.method,
              //Authorization: token,
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                // console.log("response", response);
                return response.json();
              })
              .then((data) => {
                console.log("serverREsponseLogin -> ", data.serverResponse);
                setUser(data.serverResponse);
              });
          };
          getUser();
        }
      });
    };
    fuc();
  }, [dataUser, form.email]);
  console.log("result USer--------------->", User);
  ////-------------------------logica para mandar datos de login-------------
  const [emptyForm, setEmptyForm] = useState(false);
  const [credenciales, setCredenciales] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault(); //e.preventDefault(); es para que no se recargue en otro servicio
    console.log(email, password);
    if (email === "" || password === "") {
      setEmptyForm(true);
      setTimeout(() => {
        setEmptyForm(false);
      }, 5000);
    } else setEmptyForm(false);
    //---validacion de credenciales----
    if (User.email === email) {
      dispatch(authAsync(email, password));
    } else {
      setCredenciales(true);
      setTimeout(() => {
        setCredenciales(false);
      }, 5000);
    }
  };
  //----------------------------------------fin---------------------------------------

  //logica para roles
  const { rolUser } = User;
  console.log("result USer Rol", rolUser);
  const roles = rolUser;
  //const roles = "Admin" || "Admin";
  //const roles = "Admin";
  //const roles = "Docente";
  //const roles = "Estudiante";
  let componente;
  if (emptyForm) {
    componente = (
      <ErrorValidacion mensaje="Verifique, los campos son requeridos" />
    );
  } else componente = null;

  let mensajeuser;
  if (credenciales && !emptyForm) {
    mensajeuser = <ErrorValidacion mensaje="Credenciales incorrectas" />;
  } else mensajeuser = null;

  return (
    <>
      {token == null ? (
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>UATF</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handlerSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdAttachEmail />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handlerChangeForm}
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdVpnKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handlerChangeForm}
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <br />
                  {componente}
                  {mensajeuser}
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  {msnerror && <div>{msnerror}</div>}
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                    <br />
                    {/* <div className="d-flex justify-content-center links">
                      <Link to="/register">Sign Up</Link>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : roles === "Admin" ? (
        <Redirect to="/usuario" />
      ) : roles === "Docente" ? (
        <Redirect to="/interface-docente" />
      ) : roles === "Estudiante" ? (
        <Redirect to="/interface-estudiante" />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

/*
      : roles === "Admin" ? (
        <Redirect to="/usuario" />
      ) : roles === "Docente" ? (
        <Redirect to="/interface-docente" />
      ) : roles === "Estudiante" ? (
        <Redirect to="/interface-estudiante" />
      ) : (
        <Redirect to="/" />
      )}





 : (
        (roles === "Admin" && <Redirect to="/usuario" />,
        roles === "Docente" && <Redirect to="/interface-docente" />,
        roles === "Estudiante" && <Redirect to="/interface-estudiante" />)
      )
*/
/*
<>
      {token == null ? (
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>UATF</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handlerSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdAttachEmail />
                      </span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handlerChangeForm}
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <MdVpnKey />
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handlerChangeForm}
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  {msnerror && <div>{msnerror}</div>}
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                    <br />
                    {/* <div className="d-flex justify-content-center links">
                      <Link to="/register">Sign Up</Link>
                    </div> }
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : roles === "Admin" ? (
            <Redirect to="/usuario" />
          ) : roles === "Docente" ? (
            <Redirect to="/interface-docente" />
          ) : roles === "Estudiante" ? (
            <Redirect to="/interface-estudiante" />
          ) : (
            <Redirect to="/login" />
          )}
        </>
*/
