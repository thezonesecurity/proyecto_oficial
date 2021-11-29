import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdAttachEmail, MdVpnKey } from "react-icons/md";
import { useForm } from "./hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { auth, authAsync } from "./actions/auth";
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
    email: "nanami@gmail.com",
    password: "12345",
  });

  const { email, password } = form;
  const handlerSubmit = (e) => {
    e.preventDefault(); //e.preventDefault(); es para que no se recargue en otro servicio
    console.log(email, password);
    dispatch(authAsync(email, password));
  };

  //logica para roles
  const roles = "admin";
  //const roles = "docente";
  //const roles = "estudiante";
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
      ) : roles === "admin" ? (
        <Redirect to="/docente" />
      ) : roles === "docente" ? (
        <Redirect to="/interface-docente" />
      ) : (
        <Redirect to="/interface-estudiante" />
      )}
    </>
  );
};
