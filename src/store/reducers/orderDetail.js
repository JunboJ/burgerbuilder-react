import * as actionTypes from "../actions/actionTypes";
import update from 'immutability-helper';

const initialState = {
	ingredients: {
		bacon: 0,
		salad: 0,
		cheese: 0,
		meat: 0,
	},
	totalPrice: null,
};

const INGREDIENT_PRICE = {
	salad: 50,
	cheese: 80,
	bacon: 40,
	meat: 100,
};

const addIngredient = (state, action) => {
	const ingredientToUpdate = action.ingredient;
	const newIng = {};
	newIng[ingredientToUpdate] = state.ingredients[ingredientToUpdate] + 1
	return update(state, {
		ingredients: {$merge: newIng},
		totalPrice: {$apply: p => p + INGREDIENT_PRICE[ingredientToUpdate]}
	});
};

const removeIngredient = (state, action) => {
	const ingredientToUpdate = action.ingredient;
	const oldIng = state.ingredients[ingredientToUpdate];
	const newIng = {};
	newIng[ingredientToUpdate] = oldIng > 0 ? oldIng - 1 : oldIng;
	return update(state, {
		ingredients: {$merge: newIng},
		totalPrice: {$set: oldIng > 0 ? state.totalPrice - INGREDIENT_PRICE[action.ingredient] : state.totalPrice}
	})
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return addIngredient(state, action);

		case actionTypes.REMOVE_INGREDIENT:
			return removeIngredient(state, action);

		default:
			return state;
	}
};

export default reducer;
