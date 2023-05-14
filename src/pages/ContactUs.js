// contact us form: to test useNavigate hook

import React from 'react';

// hooks: useNavigate to retain information iirc
import {useNavigate} from "react-router-dom";

// react-bootstrap components
import {Container, Button} from "react-bootstrap";

// stylesheet
import "../assets/styles/pagestyles.css";

export default function ContactUs() {
    
    // variables
    const navigate = useNavigate();

    // functions!
    function submitForm() {
        alert("hi");
        navigate("/form-submitted");
    }

    // return statement for JSX to render HTML
    return (
        <React.Fragment>
            <Container className="contact-form-container">
                <h1>contact</h1>
                {/* okay just write the form for now, can always refactor into forms module later. */}
                <div className="contact-form">
                    <div className="contact-form-inputs">
                        <div style={{marginBottom: '8px'}}>
                            {/* inline style uses camelCase, not kebab */}
                            <label style={{marginRight: '10px'}}>Full name:</label>
                            <input type="text" name="fullname"/>
                        </div>
                        <div>
                            <label style={{marginRight: '10px'}}>Email:</label>
                            <input type="text" name="email"/>
                        </div>
                        {/* very interesting: <input> with type=button can't have text, needs text to be value */}
                        {/* <input type="button" value="Submit" onClick={submitForm}></input> */}
                    </div>
                    <Button onClick={submitForm}>Submit</Button>
                </div>
            </Container>
        </React.Fragment>
    )
}