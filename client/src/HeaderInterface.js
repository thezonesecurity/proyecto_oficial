import React from "react";
import { MdLockOpen } from "react-icons/md";

import { useDispatch } from "react-redux";
import { authLogoutAsync } from "./login/actions/auth";
//import { authLogoutAsync } from "./admin/login/actions/auth";

export const HeaderInterface = () => {
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(authLogoutAsync());
  };
  return (
    <div className="header">
      <div className="row" id="contenedor">
        <center>
          <br />
          <img src="https://i.ibb.co/4MZPMZK/oie-transparent.png" />
        </center>
        <li className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary" onClick={handlerLogout}>
            <MdLockOpen className="float-end" />
            Log/Out
          </button>
        </li>
        <hr />
      </div>
    </div>
  );
};
