// useContext hook, useState hook
import React, {useContext, useState} from "react";

// useEffect
import {useEffect} from "react";

import CardContext from "../contexts/CardContext";

export default function Cards() {

    // save the cards in the state. will come as array of objects
    const [cards, setCards] = useState([]);

    // get the context?
    let context = useContext(CardContext);

    // useEffect to create a function, and it runs upon component mounting (similar to ComponentDidMount in proj 2)
    useEffect(() => {
        // define the function, needs to be async because the API retrieval is async
        const getCards = async () => {
            try {
            const allCards = await context.getCards();
            setCards(allCards);
            } catch (e) {
                console.error(e);
            }
        }
        // useEffect also calls the function in the same instance
        getCards();
    }, [context])
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
        </React.Fragment>
    )
}