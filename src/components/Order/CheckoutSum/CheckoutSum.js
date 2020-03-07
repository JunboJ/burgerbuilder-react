import React, { useContext } from 'react';

import Burger from '../../Burger/Burger';
import classes from './CheckoutSum.module.css';
import EditIngredientContext from '../../../context/editIngredient-context';

const CheckoutSum = props => {
    return (
        <EditIngredientContext.Provider>
            <div className={classes.CheckoutSum_wrapper}>
                <h1>Your Burger: </h1>
                <div>
                    <Burger />
                </div>
            </div>
        </EditIngredientContext.Provider>
    );
}
export default CheckoutSum;