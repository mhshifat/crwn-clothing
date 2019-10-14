import React from "react";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import FormInput from "../../../components/Forms/FormInput/FormInput";
import { signInWithGoogle } from "../../../firebase";
import useForm from "../../../hooks/useForm";
import "./Login.scss";

const Login = () => {
  const [formValues, handleFormInputChange, handleLoginFormSubmit] = useForm({
    email: "",
    password: ""
  });

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleLoginFormSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={formValues.email}
          handleChange={handleFormInputChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={formValues.password}
          handleChange={handleFormInputChange}
          required
        />

        <div className="buttons">
          <PrimaryBtn type="submit">Sign in</PrimaryBtn>
          <PrimaryBtn onClick={signInWithGoogle} iSGoogleSignIn>
            Sign in with google
          </PrimaryBtn>
        </div>
      </form>
    </div>
  );
};

export default Login;
