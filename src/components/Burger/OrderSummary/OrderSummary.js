import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const OrderSummary = props => {
    const ingredientsSummary = props.ingredients;
    const ingredientsListItems = Object.keys(ingredientsSummary).map((key) => {
        return (
            <li>
                <p>{key}</p>
                <p>Amount: {props.ingredients[key]}</p>
            </li>
        )
    })
    return (
        <Aux>
            <p>Following are chosen ingredients for your burger:</p>
            <ul>
                {ingredientsListItems}
            </ul>
        </Aux>
    );
}
export default OrderSummary;