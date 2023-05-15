// providers provide data to the context, for other components to use

// import context in
import CardContext from "../contexts/CardContext";
import { BASE_URL } from "../constants/Constant";

// ahxios to fetch from backend
import axios from "axios";

// my backend url, later change to deployed url
const URL = "https://3000-shiviyer-project3backen-yor58kqud3j.ws-us97.gitpod.io/API";

export default function CardProvider(props) {

    // anything db related is asynchronous, always have to async and await
    const cardContexts = {
        // all functions related to cards, like a "data access" layer for cards
        getCards: async () => {
                // fetch cards from my backend API
            const response = await axios.get(BASE_URL +'api/cards');
          
            return response.data;
            
        },
        // crud for cart (mostly axios.post), (userid)
        // setLoginState : (toggle) => {
        //     setLoginStatus(toggle)
        // }
    }

    return (
        // return the provider. value is cardContexts to pass down the object
        <CardContext.Provider value={cardContexts}>
            {props.children}
        </CardContext.Provider>
    );
}