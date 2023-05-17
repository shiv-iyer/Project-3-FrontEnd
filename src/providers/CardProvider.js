// providers provide data to the context, for other components to use

// import context in
import CardContext from "../contexts/CardContext";
import { BASE_URL } from "../constants/Constant";

// ahxios to fetch from backend
import axios from "axios";

export default function CardProvider(props) {

    // anything db related is asynchronous, always have to async and await
    const cardContexts = {
        // all functions related to cards, like a "data access" layer for cards
        getCards: async () => {
                // fetch cards from my backend API
            //const response = await axios.get(BASE_URL +'api/cards');
            const response = await axios.get(`${BASE_URL}/cards`);
          
            return response.data;
            
        },
        addCardToCart: async (data) => {
            // post request
            const response = await axios.post(`${BASE_URL}/carts/add`, data);

            console.log(response);
            return response.data;

        }

    }

    return (
        // return the provider. value is cardContexts to pass down the object
        <CardContext.Provider value={cardContexts}>
            {props.children}
        </CardContext.Provider>
    );
}