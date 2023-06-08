import React, {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {Button} from "react-bootstrap";

import { BASE_URL } from "../constants/Constant";

import axios from "axios";

// import context to use the functions from user provider
import UserContext from "../contexts/UserContext";

export default function Login() {

    const context = useContext(UserContext);
    const navigate = useNavigate();

    // massive state by wrapping an object within useState
    const [formState, setFormState] = useState({
        // initialize as empty string
        email: "",
        password: ""
    });

    const updateFormField = (event) => {
        setFormState({
            // when you spread formState, it will always take the last value, even if repeat keys
            ...formState,
            [event.target.name]: event.target.value
         })
    };

    // function to submit and post the request via context
    const submitForm = async () => {
        // empty string is falsy
        if (formState.email && formState.password){
  
                console.log(formState);
                const response = await context.userLogin(formState);
                // after get the response, validate based on the response sent from json in the backend
                if (response.error !== "Wrong email or password"){
                    localStorage.setItem("accessToken", response.accessToken);
                    localStorage.setItem("refreshToken", response.refreshToken);
                    alert("You have successfully logged in!");
                    navigate("/profile")
                } else {
                    alert(response.error);
                }
                console.log(response);
        } else {
            alert("Please fill in all fields");
        }
        
    };

    return (
        <React.Fragment>
            <h1 className="page-heading">Login</h1>
            <div className="container">
                <div className="form-group">
                    <div className="form-item">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formState.email}
                            onChange={updateFormField}
                            />
                    </div>
                    <div className="form-item">
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={updateFormField}
                        />
                    </div>
                </div>
            </div>
            <Button onClick={submitForm} className="submit-button">Submit</Button>
        </React.Fragment>
    )
}