import React from "react";
import "./PrimaryBtn.scss";

const PrimaryBtn = ({ children, iSGoogleSignIn, inverted, ...rest }) => {
  return (
    <button
      className={`${
        iSGoogleSignIn ? "sign-in-with-google" : inverted ? "inverted" : ""
      } custom-button`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
