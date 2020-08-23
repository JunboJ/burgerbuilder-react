import * as actions from "../actions";

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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_INGREDIENT:
			const oldState_add = state.ingredients[action.ingredient];
			const oldPrice_add = state.totalPrice;
			const updatedState_add = {
				...state,
				ingredients: { ...state.ingredients },
			};
			updatedState_add.ingredients[action.ingredient] = oldState_add + 1;
			updatedState_add.totalPrice = oldPrice_add + INGREDIENT_PRICE[action.ingredient];
			return updatedState_add;

		case actions.REMOVE_INGREDIENT:
			const oldState_remove = state.ingredients[action.ingredient];
			if (oldState_remove > 0) {
				const oldPrice_remove = state.totalPrice;
				const updatedState_remove = { ...state, ingredients: { ...state.ingredients } };
				updatedState_remove.ingredients[action.ingredient] = oldState_remove - 1;
				updatedState_remove.totalPrice = oldPrice_remove - INGREDIENT_PRICE[action.ingredient];
				return updatedState_remove;
			}
			return initialState;

		default:
			return state;
	}
};

export default reducer;
