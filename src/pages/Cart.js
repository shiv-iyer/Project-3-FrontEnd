import React, { useState, useContext, useEffect } from "react";

import jwtDecode from "jwt-decode";

// import context to use the functions from user provider
import UserContext from "../contexts/UserContext";

import { Button } from "react-bootstrap";

export default function Cart() {
  const [userID, setUserID] = useState();
  const [cartItems, setCartItems] = useState([]);

  const context = useContext(UserContext);

  // componentDidMount equivalent to get cart items from the user

  // retrieve the user details decoded from JWT from local storage
  useEffect(() => {
    async function fetchData() {
      // if token exists
      if (userID && userID !== undefined) {
        // get user cart
        const cart = await context.getCart(userID);

        setCartItems(cart);
        return cart;
      }
    }
    fetchData();
  }, [context, userID]);

  useEffect(() => {
    async function getUserID() {
      const token = localStorage.getItem("accessToken");

      // if token exists
      if (token) {
        // set user id to
        setUserID(jwtDecode(token).id);
      }
    }
    getUserID();
  }, [context]);

  // remove from cart
  const removeFromCart = async (cardID) => {
    // data required for the post request
    // the values of the keys are being matched to the state
    const data = {
      userID: userID,
      cardID: cardID,
    };
    const response = await context.removeCardFromCart(data);

    const newCart = await context.getCart(userID);
    setCartItems(newCart);
  };

  // add and subtract from cart
  const addQuantity = async (cardID) => {
    // get the card and filter to ensure that the card matches the card in cart items
    const cardToUpdate = cartItems.filter((item) => item.card_id === cardID);
    // map each cart item and retrieve the correct card, so that the quantity can be updated
    const newData = cartItems.map((item) => {
      if (item.card_id === cardID) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      setCartItems(newData);
    });
    // object to pass in in req.body
    await context.updateCardInCart({
      userID: userID,
      cardID: cardToUpdate[0].card_id,
      quantity: cardToUpdate[0].quantity + 1,
    });

    const newCart = await context.getCart(userID);
    setCartItems(newCart);
  };

const removeQuantity = async (cardID) => {
    // get the card and filter to ensure that the card matches the card in cart items
    const cardToUpdate = cartItems.filter((item) => item.card_id === cardID);
    // map each cart item and retrieve the correct card, so that the quantity can be updated
    const newData = cartItems.map((item) => {
      if (item.card_id === cardID) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      setCartItems(newData);
    });
    // object to pass in in req.body
    await context.updateCardInCart({
      userID: userID,
      cardID: cardToUpdate[0].card_id,
      quantity: cardToUpdate[0].quantity - 1,
    });

    const newCart = await context.getCart(userID);
    setCartItems(newCart);
  };

  return (
    <React.Fragment>
      <h1>Cart</h1>
      {cartItems && cartItems.length > 0
        ? cartItems.map((item) => {
            return (
              <React.Fragment key={item.card_id}>
                <h1>Name: {item.card.name}</h1>
                <Button
                  onClick={() => {
                    removeFromCart(item.card_id);
                  }}
                >
                  Remove From Cart
                </Button>
                <Button
                  onClick={() => {
                    addQuantity(item.card_id);
                  }}
                >
                  +
                </Button>
                <input type="text" value={item.quantity}></input>
                <Button onClick={() => {
                    removeQuantity(item.card_id);
                }}>-</Button>
              </React.Fragment>
            );
          })
        : "bye"}
    </React.Fragment>
  );
}
