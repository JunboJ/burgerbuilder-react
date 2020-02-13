import React from 'react';

const editIngredientContext = React.createContext({
    add: () => {},
    remove: () => {},
    ingredients: null
});

export default editIngredientContext;