import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/theme";
import I18n from "../locales";
import Login from "../pages/auth";
import Store from "../store";
import MainApp from "./mainapp";

// eslint-disable-next-line no-unused-vars
// const I = I18n;

const RootConatainer = (props) => {
  const location = useLocation();

  useEffect(() => {
    getAuthStatus();
  }, [location]);

  const getAuthStatus = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Provider store={Store}>
      <ThemeContextProvider Theme={"light"}>
        <Routes>
          <Route
            path="app/*"
            element={
              getAuthStatus() ? <MainApp /> : <Navigate replace to="/login" />
            }
          />
          {/*<MainApp />*/}
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              getAuthStatus() ? (
                <Navigate replace to="/app" />
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
        </Routes>
      </ThemeContextProvider>
    </Provider>
  );
};

export default RootConatainer;
