import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/VentasPro-Login.css";
import logo from "../../assets/images/LocalTapiola.png";

const Login = () => {
  const navigate = useNavigate();
  const [newUser, setnewUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.name)
    setnewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    localStorage.setItem("token", "temporary token");
    navigate("/");
  };

  return (
    <div id="main">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <button
          className="btn btn-outline-light fs-5 fw-semibold "
          id="btn-sesion"
          type="button"
          onClick={handleSubmit}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
