import React, { useContext, useState } from "react";
import { MdPersonPin, MdVpnKey, MdAttachEmail } from "react-icons/md";
import { useForm } from "./hooks/useForm";
import DataUser from "./reducers/AppContextUSer";
import { types } from "./types/types";
import uniqid from "uniqid";
import { ErrorValidacion } from "../admin/ErrorValidacion";
import { MessageCreateUser } from "../admin/MessageCreateUser";
export const Register = () => {
  const { state, setState, dispatch } = useContext(DataUser);
  //console.log("stateUSER", state);
  const [formUser, handlerChangeFormUser, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  console.log("stateUSERForm", formUser);
  const { username, email, password, repassword } = formUser;
  const [errors, setErrors] = useState(false);
  const [createUser, setCreateUser] = useState(false);
  const handlerSubmitSaveUSer = (e) => {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      repassword === ""
    ) {
      setErrors(true);
      setCreateUser(false);
      return;
    } else {
      setCreateUser(true);
    }
    dispatch({
      type: types.REGISTER_USER,
      payload: { ...formUser, id: uniqid() },
    });
    resetForm();
    setErrors(false);
  };
  let componente;
  if (errors) {
    //mostrando el error
    componente = (
      <ErrorValidacion mensaje="Verifique todos los campos son requeridos" />
    );
  } else componente = null;
  let created;
  if (createUser) {
    created = <MessageCreateUser mensaje="Usuario creado correctamente" />;
  } else created = null;
  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Registro</h3>
            <div className="d-flex justify-content-end social_icon">
              <span className="fab fa-facebook-square"></span>
              <span className="fab fa-google-plus-square"></span>
              <span className="fab fa-twitter-square"></span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <MdPersonPin />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  name="username"
                  value={username}
                  onChange={handlerChangeFormUser}
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <MdAttachEmail />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={handlerChangeFormUser}
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
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handlerChangeFormUser}
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
                  className="form-control"
                  placeholder="Rep. password"
                  name="repassword"
                  value={repassword}
                  onChange={handlerChangeFormUser}
                />
              </div>
              {componente}
              {created}
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                  onClick={handlerSubmitSaveUSer}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
