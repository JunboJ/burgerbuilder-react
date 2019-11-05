import React from 'react';
import classes from './Controllers.module.css';
import Controller from './Controller/Controller';

const Controllers = props => {
    let ulClassNamesArr = ["list-group", classes.controllerGroup];
    let ulClassNames = ulClassNamesArr.join(" ");

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
        </div>
    );
}
export default Controllers;