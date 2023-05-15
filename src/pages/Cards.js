// useContext hook
import React, {useContext} from "react";

import CardContext from "../contexts/CardContext";

export default function Cards() {
    // get the context?
    let context = useContext(CardContext);
    
    return (
        <React.Fragment>
            <ul>
                {context.getCards().map(c => {
                    <li>{c}</li>
                })}
            </ul>
        </React.Fragment>
    )
}