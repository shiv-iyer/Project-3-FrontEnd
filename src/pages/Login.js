import React, {useState, useContext} from "react";

import {Button} from "react-bootstrap";

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
        console.log(formState);
        // match the object to the object being received in userLogin
        // const response = await context.userLogin({
        //     "email": formState.email,
        //     "password": formState.password
        // });
        const response = await axios.post(`https://shiviyer-project3backen-yor58kqud3j.ws-us97.gitpod.io/api/users/login`, formState);
        console.log(response);
    };

    return (
        <React.Fragment>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={updateFormField}
                    />
            </div>
            <div>
                <label>Password</label>
                <input
                 type="password"
                 name="password"
                 value={formState.password}
                 onChange={updateFormField}
                 />
            </div>
            <Button onClick={submitForm}>Submit</Button>
        </React.Fragment>
    )
}