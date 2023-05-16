import React, {useState} from "react";

export default function Login() {
    return (
        <React.Fragment>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input type="text"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
        </React.Fragment>
    )
}