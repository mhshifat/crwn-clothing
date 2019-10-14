import React from "react";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";
import FormInput from "../../../components/Forms/FormInput/FormInput";
import useForm from "../../../hooks/useForm";
import "./Register.scss";

const Register = () => {
  const [formValues, handleInputChange, , handleSignUpFormSubmit] = useForm({
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSignUpFormSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={formValues.displayName}
          onChange={handleInputChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="passwordConfirmation"
          value={formValues.passwordConfirmation}
          onChange={handleInputChange}
          label="Confirm Password"
          required
        />

        <PrimaryBtn type="submit">SIGN UP</PrimaryBtn>
      </form>
    </div>
  );
};

export default Register;
