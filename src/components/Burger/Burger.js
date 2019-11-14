import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
    let ingredientList = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, index) => {
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
            <Ingredient  type="bread-top"/>
            {ingredientList}
            <Ingredient type="bread-bottom"/>
            
        </div>
    );
}
export default Burger;