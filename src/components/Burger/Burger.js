import React, { useContext } from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';
import EditIngredientContext from '../../context/editIngredient-context';


const Burger = props => {
    const data = useContext(EditIngredientContext);
    console.log(data.ingredients);
    
    let ingredientList = Object.keys(data.ingredients).map(key => {
        return [...Array(data.ingredients[key])].map((_, index) => {
            return <Ingredient key={key + index} type={key} />
        });
    })
        .reduce((prev, current) => {
            return prev.concat(current);
        }, []);

    if (ingredientList.length === 0) {
        ingredientList = <p className={classes.Hint}>Add ingredients from below!</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {ingredientList}
            <Ingredient type="bread-bottom" />

        </div>
    );
}
export default Burger;