// user provider has functionality for users and for cart functionality

import UserContext from "../contexts/UserContext";
import { BASE_URL } from "../constants/Constant";

// ahxios
import axios from "axios";

export default function UserProvider(props) {

    const userContexts = {
        // all database functions are async

        // userData is an object that will contain everything for auth, passed in from component that calls the func
        userLogin: async (userData) => {
            // all user info is in req.body so we need to pass the user auth details in req.body

            const response = await axios.post(`${BASE_URL}/users/login`, userData);
            // the forbidden third header in axios.post

            // localstorage is part of javascript
            if (response !== "Invalid email or password.") {
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
            }

            console.log(localStorage);

            return response.data;
        },

        // user register
        userRegister: async (userData) => {
            const response = await axios.post(`${BASE_URL}/users/register`, userData);
            console.log (response);
            return response.data
        },

        getCart: async (userID) => {
            const response = await axios.get(`${BASE_URL}/carts/${userID}`);

            console.log(response);
            return response.data;
        },

        removeCardFromCart: async (data) => {
            // post req again
            // body requires user id and card id
            const response = await axios.post(`${BASE_URL}/carts/delete`, data);

            console.log(response);
            return response.data;
        },

        updateCardInCart: async (data) => {
            // match. don't even need to comment again
            const response = await axios.post(`${BASE_URL}/carts/update`, data);
            
            console.log(response);
            return response.data;
        }

        // all gets are working, but post is not working
    };

    return (
        <UserContext.Provider value={userContexts}>
            {props.children}
        </UserContext.Provider>
    );
}


// <a href={checkout url from backend}> Checkout button</a>