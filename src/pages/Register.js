import React, { useContext, useState } from "react";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";

export default function Register() {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  // massive state by wrapping an object within useState
  const [formState, setFormState] = useState({
    // initialize all empty string
    // null instead
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    contact_number: "",
  });

  const updateFormField = (event) => {
    setFormState({
      // when you spread formState, it will always take the last value, even if repeat keys
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async () => {
    
    // response from context
    const response = await context.userRegister(formState);

    // if the response isn't the incorrect one, submit the form and register
    if (response !== 'you need to fill in the form properly') {
      alert("You have successfully registered! :D");
      setFormState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        contact_number: "",
      })
      navigate('/login');
    } else {
      // else don't go through and clear fields for a new input
      setFormState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        contact_number: "",
      });
      alert("Please enter data into all fields");
    }
   
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="page-heading">Register</h1>
        <div className="form-group">
          <div className="form-item my-2">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formState.first_name}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
          <div className="form-item my-2">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formState.last_name}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
          <div className="form-item my-2">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
          <div className="form-item my-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
          <div className="form-item my-2">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
          <div className="form-item my-2">
            <label>Contact Number</label>
            <input
              type="text"
              name="contact_number"
              value={formState.contact_number}
              onChange={updateFormField}
              className="ms-2"
            />
          </div>
        </div>
        <Button onClick={submitForm} className="submit-button">
          Submit
        </Button>
      </div>

      {/* username password email contact_number */}
    </React.Fragment>
  );
}