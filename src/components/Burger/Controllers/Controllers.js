import React from 'react';
import classes from './Controllers.module.css';
import Controller from './Controller/Controller';

const Controllers = props => {
    let ulClassNamesArr = ["list-group", classes.controllerGroup];
    let ulClassNames = ulClassNamesArr.join(" ");

    // const totalIngredientsArr = [];
    const totalIngredientAmount = Object.keys(props.ingredients).map((key) => {
        return props.ingredients[key];
    }).reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    // const totalIngredientAmount = totalIngredientsArr.reduce((prev, curr) => {
    //     return prev + curr;
    // }, 0);



    const controllers = props.allIngredients.map((ingredient, i) => {
        return (
            <Controller
                key={ingredient.label}
                label={ingredient.label}
                type={ingredient.type}
                disable={props.ingredients[ingredient.type] === 0}
            />
        )
    })

    return (
        <div className={classes.Controllers}>
            <ul className={ulClassNames}>
                {controllers}
            </ul>
            <h4 className={classes.TotalPrice}>Total Price: {((props.price) / 100).toFixed(2)}$</h4>
            <button
                disabled={totalIngredientAmount === 0}
                className={`btn btn-warning ${classes.CheckOut}`}
            >{`Check Out  `}
                <span className={classes.CheckOutChecked}>
                    <i className="fas fa-check"></i>
                </span>
            </button>
        </div>
    );
}
export default Controllers;