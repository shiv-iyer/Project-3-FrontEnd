// providers provide data to the context, for other components to use

// import context in
import CardContext from "../contexts/CardContext";

// ahxios to fetch from backend
import axios from "axios";

// my backend url, later change to deployed url
const URL = "https://3000-shiviyer-project3backen-yor58kqud3j.ws-us97.gitpod.io/API";

export default function CardProvider(props) {

    const cardContexts = {
        // all functions related to cards, like a "data access" layer for cards
        getCards: () => {
            // fetch cards from my backend API
            const response = axios.get(`${URL}/cards`);
            return response.data;
        }
    }

    return (
        // return the provider.
        <CardContext.Provider>
            {props.children}
        </CardContext.Provider>
    );
}