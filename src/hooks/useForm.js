import { useState } from "react";
import { auth, createUserDocument } from "../firebase";

export default initialState => {
  const [formValues, setFormValues] = useState(initialState);

  const loginAUser = e => {
    e.preventDefault();
    const { email, password } = formValues;

    try {
      auth.signInWithEmailAndPassword(email, password);
      setFormValues(initialState);
    } catch (err) {
      console.log("Sign In Error: ", err);
    }
  };

  const signUpAUser = async e => {
    e.preventDefault();
    const { displayName, email, password, passwordConfirmation } = formValues;

    if (password !== passwordConfirmation) {
      alert("Password doesn't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      setFormValues(initialState);
    } catch (err) {
      console.log("Sign Up Error: ", err);
    }
  };

  return [
    formValues,
    e => setFormValues({ ...formValues, [e.target.name]: e.target.value }),
    loginAUser,
    signUpAUser
  ];
};
