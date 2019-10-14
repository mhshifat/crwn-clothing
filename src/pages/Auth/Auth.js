import React from "react";
import "./Auth.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Auth = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
