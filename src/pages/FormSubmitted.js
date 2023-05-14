import React from "react";

// react-bootstrap imports
import {Button} from "react-bootstrap";

// useNavigate again
import {useNavigate} from "react-router-dom";

export default function FormSubmitted() {

    const navigate = useNavigate();

    // functions
    function returnHome() {
        navigate("/");
    }

    return (
        <React.Fragment>
            <h1>Thank you for contacting us!</h1>
            <Button onClick={returnHome}>Back to Home</Button>
        </React.Fragment>
    )
}