import React, { useState } from "react";
import { MdPersonPin, MdVpnKey } from "react-icons/md";
import { Link } from "react-router-dom";
export const LoginAD = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    //console.log("usuario", e.target.value);
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    //console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const handlerSubmit = (e) => {
    props.onLogin(email, password);
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>UATF</h3>
            <div className="d-flex justify-content-end social_icon">
              <span className="fab fa-facebook-square"></span>
              <span className="fab fa-google-plus-square"></span>
              <span className="fab fa-twitter-square"></span>
            </div>
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
                  className="form-control"
                  placeholder="email"
                  onChange={emailChangeHandler}
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
                  onChange={passwordChangeHandler}
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn float-right login_btn"
                />
                <div className="d-flex justify-content-center links">
                  <a href="#">Sign Up</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
