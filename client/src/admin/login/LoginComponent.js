import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { RouteAppAdmin } from "../route/RouteAppAdmin";

export const LoginComponent = () => {
  return (
    <Provider store={store}>
      <RouteAppAdmin />
    </Provider>
  );
};
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
