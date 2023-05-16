import React, {useContext, useState} from "react";

import {Button} from "react-bootstrap";

import UserContext from "../contexts/UserContext";

export default function Register () {

    const context = useContext(UserContext);

    // massive state by wrapping an object within useState
    const [formState, setFormState] = useState({
        // initialize all empty string
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        contact_number: ""
    });

    const updateFormField = (event) => {
        setFormState({
            // when you spread formState, it will always take the last value, even if repeat keys
            ...formState,
            [event.target.name]: event.target.value
         })
    };

    const submitForm = async () => {
        const response = await context.userRegister(formState);

        console.log(response);

        console.log(formState);
            // match the object to the object being received in userLogin
            // const response = await context.userLogin({
            //     "email": formState.email,
            //     "password": formState.password
            // });
    }

    return (
        <React.Fragment>
            <h1>Register</h1>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={formState.first_name}
                    onChange={updateFormField}
                    />
            </div>
            <div>
                <label>Last Name</label>
                <input
                 type="text"
                 name="last_name"
                 value={formState.last_name}
                 onChange={updateFormField}
                 />
            </div>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formState.username}
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
                <label>Contact Number</label>
                <input
                    type="text"
                    name="contact_number"
                    value={formState.contact_number}
                    onChange={updateFormField}
                    />
            </div>

            <Button onClick={submitForm}>Submit</Button>

            {/* username password email contact_number */}
        </React.Fragment>
    )
}