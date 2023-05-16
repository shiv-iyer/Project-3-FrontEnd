import React, {useState} from "react";

export default function Login() {

    // massive state by wrapping an object within useState
    const [formState, setFormState] = useState({
        // initialize as empty string
        email: "",
        password: ""
    })

    const updateFormField = (event) => {
        setFormState({
            // when you spread formState, it will always take the last value, even if repeat keys
            ...formState,
            [event.target.name]: event.target.value
         })
    }

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
        </React.Fragment>
    )
}