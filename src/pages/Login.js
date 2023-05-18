import React, {useState, useContext} from "react";

import {Button} from "react-bootstrap";

import { BASE_URL } from "../constants/Constant";

import axios from "axios";

// import context to use the functions from user provider
import UserContext from "../contexts/UserContext";

export default function Login() {

    const context = useContext(UserContext);

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
        alert("you have logged in hf");
        console.log(formState);
        const response = await context.userLogin(formState);
        // const response = await axios.post(`${BASE_URL}/users/login`, formState);
        console.log(response);
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