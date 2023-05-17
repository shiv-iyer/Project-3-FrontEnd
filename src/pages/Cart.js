import React, {useState, useContext, useEffect} from "react";

import jwtDecode from "jwt-decode";

// import context to use the functions from user provider
import UserContext from "../contexts/UserContext";

export default function Cart() {

    const [userId, setUserId] = useState();
    const [cartItems, setCartItems] = useState([]);

    const context = useContext(UserContext);

    // componentDidMount equivalent to get cart items from the user

    // retrieve the user details decoded from JWT from local storage
    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        // if token exists
        if (token) {
            console.log(jwtDecode(token));
            // set user id to 
            setUserId((jwtDecode(token)).id);
        }
    }, []);

    return (
        <React.Fragment>
            <h1>Cart</h1>
        </React.Fragment>
    )
}