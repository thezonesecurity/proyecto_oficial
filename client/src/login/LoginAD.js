import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdAttachEmail, MdVpnKey } from "react-icons/md";
import { useForm } from "./hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { auth, authAsync } from "./actions/auth";
import { endpointsL } from "./types/endPointsL";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
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
  }, []);

  const { auth: authRename, msnerror } = useSelector((state) => state);
  const { token } = authRename;
  const [form, handlerChangeForm, handlerResetForm] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const handlerSubmit = (e) => {
    e.preventDefault(); //e.preventDefault(); es para que no se recargue en otro servicio
    console.log(email, password);
    dispatch(authAsync(email, password));
  };

  //-------------------- peticion de listar usuarios-----------------------
  const [dataUser, setDataUser] = useState({});
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
  }, []);
  console.log("serverLOgin", dataUser);
  console.log("email", form.email);
  useEffect(() => {
    const fuc = async () => {
      dataUser.map((element) => {
        if (form.email === element.email) {
          console.log("encontro", element.nombre, element.email, element._id);
          //-----------------peticion para ver un usuario------------------------
          const getUser = async () => {
            await fetch(endpointsL.verUser.url + element._id, {
              method: endpointsL.verUser.method,
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
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
    //fuc();
  }, []);
  console.log("result USer", User);

  //logica para roles
  const { rolUser } = User;
  console.log("result USer Rol", rolUser);
  const roles = rolUser || "Admin";
  //const roles = "Admin";
  //const roles = "Admin";    david@gmail.com  || diana@gmail.com
  //const roles = "Docente";     jhon@gmail.com
  //const roles = "Estudiante";   flor@gmail.com
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
                    <div className="d-flex justify-content-center links">
                      <Link to="/register">Sign Up</Link>
                    </div>
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
  );
};
