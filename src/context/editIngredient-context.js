import React from 'react';

const editIngredientContext = React.createContext({
    add: () => {},
    remove: () => {}
});

export default editIngredientContext;