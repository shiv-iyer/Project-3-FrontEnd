import React, {useState, useContext, useEffect} from "react";

import jwtDecode from "jwt-decode";

// import context to use the functions from user provider
import UserContext from "../contexts/UserContext";

import {Button} from "react-bootstrap";

export default function Cart() {

    const [userID, setUserID] = useState();
    const [cartItems, setCartItems] = useState([]);

    const context = useContext(UserContext);

    // componentDidMount equivalent to get cart items from the user

    // retrieve the user details decoded from JWT from local storage
    useEffect(() => {

        async function fetchData() {
                const token = localStorage.getItem("accessToken");
        
                // if token exists
                if (token) {
                    // set user id to 
                    setUserID((jwtDecode(token)).id);
                    // get user cart
                    const cart = await context.getCart(userID);
        
                    console.log(cart);
                    setCartItems(cart);
                    return cart;
                }
        }
        fetchData();
    }, [context, userID]);

    // remove from cart
    const removeFromCart = async (cardID) => {

        // data required for the post request
        // the values of the keys are being matched to the state
        const data = {
            userID: userID,
            cardID: cardID
        }
        const response = await context.removeCardFromCart(data);

        const newCart = await context.getCart(userID);
        setCartItems(newCart);
    }

    return (
        <React.Fragment>
            <h1>Cart</h1>
            {cartItems && cartItems.length > 0 ? cartItems.map(item => {
                return (
                    <React.Fragment key={item.card_id}>
                        <h1>Name: {item.card.name}</h1>
                        <Button onClick={() => {removeFromCart(item.card_id)}}>Remove From Cart</Button>
                    </React.Fragment>
                );
            }): "bye" }
        </React.Fragment>
    )
}