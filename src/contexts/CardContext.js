// context is context

import React from "react";
// create a context to use for my cards; fetching products etc. from backend
const CardContext = React.createContext({});

// instead of module.exports, CardContext is the default variable being exported
export default CardContext;