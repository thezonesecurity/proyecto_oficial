import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { MdPersonPin, MdVpnKey } from "react-icons/md";
import { useForm } from "./hooks/useForm";
import { useDispatch } from "react-redux";
import { authAsync, auth } from "./actions/auth";
import { useSelector } from "react-redux";

export const LoginAD = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData != null) {
      dispatch(auth(JSON.parse(userData)));
    }
  }, []);

  const { auth: authRename } = useSelector((state) => state);
  const { user, msnerror } = authRename;
  const [form, handlerChangeForm, handlerResetForm] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const handlerSubmit = (e) => {
    e.preventDefault(); //e.preventDefault(); es para que no se recargue en otro servicio
    dispatch(authAsync(email, password));
  };

  return (
    <>
      {user == null ? (
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
                        <MdPersonPin />
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
                    <div className="d-flex justify-content-center links">
                      <Link to="/register">Sign Up</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/docente" />
      )}
    </>
  );
};
