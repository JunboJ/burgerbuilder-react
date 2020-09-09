import * as actionTypes from './actionTypes';

export const add_ingredient = ing => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ing
    }
};

export const remove_ingredient = ing => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: ing
    }
};