// useContext hook, useState hook
import React, {useContext, useState, useEffect} from "react";
import axios from 'axios';
import { BASE_URL } from "../constants/Constant";

import CardContext from "../contexts/CardContext";
import PokeCards from "./PokeCards";

export default function Cards() {

    // save the cards in the state. will come as array of objects
    const [cards, setCards] = useState([]);

    // get the context?
    let context = useContext(CardContext);

    // useEffect to create a function, and it runs upon component mounting (similar to ComponentDidMount in proj 2)
    useEffect(() => {
        // define the function, needs to be async because the API retrieval is async
        const getAllCards = async () => {
            // const allCards = await axios.get( BASE_URL + 'api/cards');
            const allCards = await context.getCards();
            console.log("🚀 ~ file: Cards.js:23 ~ getAllCards ~ allCards:", allCards)
            setCards(allCards);
        }
        // useEffect also calls the function in the same instance
        getAllCards();
    }, [])
    // if cards, ok you do search & filter here
    
    return (
        <React.Fragment>
            <ul>
                {cards && Object.keys(cards).length > 0 ? cards.map((c, index) => {
                    return (
                        <li key={index}>{c.name}</li>
                    )
                }) : null}
            </ul>
            {cards && Object.keys(cards).length > 0 ? cards.map((c, index) => {
                    return (
                        <PokeCards pokedata={c}/>
                    )
                }) : null}
        </React.Fragment>
    )
}