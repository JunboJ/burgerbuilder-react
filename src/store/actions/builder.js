import * as actionTypes from './actionTypes';

const addIngredient = ing => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ing
    }
}

export const add_ingredient = ing => {
    return dispatch => {
        setTimeout(() => {
            dispatch(
                addIngredient(ing)
            );
        }, 1000);
    }
};

export const remove_ingredient = ing => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: ing
    }
};