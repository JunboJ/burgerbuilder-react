import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controllers from '../../components/Burger/Controllers/Controllers';
import EditIngredientContext from '../../context/editIngredient-context';

const INGREDIENT_PRICE = {
    salad: 50,
    cheese: 80,
    bacon: 40,
    meat: 100
}

class Builder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            meat: 0,
            cheese: 0
        },
        allIngredients: [
            { label: 'Meat', type: 'meat' },
            { label: 'Cheese', type: 'cheese' },
            { label: 'Salad', type: 'salad' },
            { label: 'Bacon', type: 'bacon' }
        ],
        totalPrice: 450
    }



    addIngredientHandler = type => {
        let oldState = this.state.ingredients[type];
        const updatedState = { ...this.state.ingredients };
        updatedState[type] = oldState + 1;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];
        console.log(INGREDIENT_PRICE[type]);
        this.setState({
            ingredients: updatedState,
            totalPrice: newPrice
        });
    }

    removeIngredientHandler = type => {
        let oldState = this.state.ingredients[type];
        if (oldState > 0) {
            const updatedState = { ...this.state.ingredients };
            updatedState[type] = oldState - 1;
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - INGREDIENT_PRICE[type];
            this.setState({
                ingredients: updatedState,
                totalPrice: newPrice
            });
        }
    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <EditIngredientContext.Provider
                    value={{
                        add: this.addIngredientHandler,
                        remove: this.removeIngredientHandler
                    }}>
                    <Controllers
                        allIngredients={this.state.allIngredients}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                    />
                </EditIngredientContext.Provider>
            </Aux>
        );
    }
};

export default Builder;