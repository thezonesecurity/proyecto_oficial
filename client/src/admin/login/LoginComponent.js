import React, { useReducer, useState } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { RouteAppAdmin } from "../route/RouteAppAdmin";
import DataUser from "./reducers/AppContextUSer";
import { AppReducerUser } from "./reducers/AppReducerUser";

export const LoginComponent = () => {
  const [user, setUser] = useState([]);
  const [state, dispatch] = useReducer(AppReducerUser, user);
  return (
    <DataUser.Provider value={{ state, dispatch }}>
      <Provider store={store}>
        <RouteAppAdmin />
      </Provider>
    </DataUser.Provider>
  );
};
/**
 <DataUser.Provider value={{ state, dispatch }}>
      <Provider store={store}>
        <RouteAppAdmin />
      </Provider>
    </DataUser.Provider>
 */

/*import { LoginAD } from "./LoginAD";
import store from "./store/store";
export const LoginComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    console.log("Logind in.....");
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <Provider store={store}>
      <LoginAD onLogin={loginHandler} />
    </Provider>
  );
}; */
