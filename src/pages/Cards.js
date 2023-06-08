// useContext hook, useState hook
import React, {useContext, useState, useEffect} from "react";
import axios from 'axios';
import { BASE_URL } from "../constants/Constant";

import CardContext from "../contexts/CardContext";
import PokeCards from "../components/PokeCard";

import {Button, Container} from "react-bootstrap";

// need to use grid here... using grid in PokeCards was not working since the data was already mapped over
import Grid from "@mui/material/Grid";

import { Typography } from '@mui/material';

export default function Cards() {

    // save the cards in the state. will come as array of objects
    const [cards, setCards] = useState([]);
    // set cards into a new state solely for the purpose of calling a new render to search on frontend
    const [displayedCards, setDisplayedCards] = useState([]);

    const [filter, setFilter] = useState({
        search: "",
        condition: "",
        rarity: "",
    });

    const updateFormField = (e) => {
        setFilter({
            ...filter,
            [e.target.name] : e.target.value
        });
    };

    // function for button
    const applyFilter = () => {
        alert("Searching for cards!");
        if (filter.search || filter.condition || filter.rarity) {
            // create new regex expression to search by user input and case insensitive
            const regex = new RegExp(filter.search, "i");
            // filtering cards that return true to match the regex expression
            // const cardsToDisplay = cards.filter(card => regex.test(card.name));
            const cardsToDisplay = cards.filter(card => 
                regex.test(card.name) && 
                (!filter.condition || card.condition === filter.condition) &&
                (!filter.rarity || card.rarity === filter.rarity)
            );
            // setting displayed cards to new state
            setDisplayedCards(cardsToDisplay);
        }
    };

    // to clear the state and set it back to the original state
    const resetFilter = () => {
        alert("Clearing search and resetting back to normal!");
        setDisplayedCards(cards);
    };


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
            setDisplayedCards(allCards)
        }
        // useEffect also calls the function in the same instance
        getAllCards();
    }, [])
    // if cards, ok you do search & filter here
    
    return (
        <React.Fragment>

            {/* search bar for filter. 1. input type = search, 2. button to apply search, 3. button to clear search */}
            <Typography variant="h6" className="search-label">Search for Cards</Typography>
            <Container>
                <div className="search-container">
                    <div>
                        <label for="search">Card Name:</label>
                        <input type="text" value={filter.search} onChange={updateFormField} name="search" id="search" className="search-item"/>
                    </div>
                    <div>
                        <label for="condition">Card Condition:</label>
                        <select name="condition" id="condition" onChange={updateFormField} className="search-item">
                            <option value="">Any</option>
                            <option value="Mint">Mint</option>
                            <option value="Near Mint">Near Mint</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Light Played">Light Played</option>
                            <option value="Played">Played</option>
                            <option value="Poor">Poor</option>
                        </select>
                    </div>
                    <div>
                    <label for="rarity">Card Rarity:</label>
                        <select name="rarity" id="rarity" onChange={updateFormField} className="search-item">
                            <option value="">Any</option>
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Holo Rare">Holo Rare</option>
                            <option value="Reverse Holo">Reverse Holo</option>
                            <option value="Played">Half Art</option>
                            <option value="Poor">Full Art</option>
                            <option value="Secret Rare">Secret Rare</option>
                            <option value="Rainbow Rare">Rainbow Rare</option>
                            <option value="Promo">Promo</option>
                        </select>
                    </div>
                    <Button onClick={applyFilter} className="search-item">Search</Button>
                    <Button variant="danger" onClick={resetFilter} className="search-item">Clear</Button>
                </div>
            </Container>

            {/*  grid to support the map from outside. jsx comments here, anything outside of React.Fragment can be // comments */}
            <Grid container spacing={2}>
                {cards && Object.keys(cards).length > 0 ? displayedCards.map((c, index) => {
                        {/* Grid without Grid Items is all clumped together. Grid items to separate each indivudal one */}
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                <PokeCards pokedata={c}/>
                            </Grid>
                        )
                    }) : null}
            </Grid>
        </React.Fragment>
    )
}