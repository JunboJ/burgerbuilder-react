import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import Controllers from '../../components/Burger/Controllers/Controllers';
import EditIngredientContext from '../../context/editIngredient-context';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        allIngredients: [
            { label: 'Meat', type: 'meat' },
            { label: 'Cheese', type: 'cheese' },
            { label: 'Salad', type: 'salad' },
            { label: 'Bacon', type: 'bacon' }
        ],
        totalPrice: 450,
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
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
                <OrderSummary checkOutClicked={this.toggleModal} showModal={this.state.showModal} ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
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
                        checkOutClicked={this.toggleModal}
                    />
                </EditIngredientContext.Provider>
            </Aux>
        );
    }
};

export default Builder;