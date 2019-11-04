import React, { useContext } from 'react';
import classes from './Controller.module.css';
import EditIngredientContext from '../../../../context/editIngredient-context';

const Controller = props => {
    let liClassNamesArr = ["list-group-item", classes.controllerGroupItem];
    let liClassNames = liClassNamesArr.join(" ");

    const editIngredientContext = useContext(EditIngredientContext);
console.log(props.type);

    return (
            <li className={liClassNames}>
                <label className={classes.controllerLabels}>{props.label}</label>
                <div className="btn-group">
                    <button onClick={() => {editIngredientContext.remove(props.type)}} className="btn btn-light">-</button>
                    {/* <div><p>7070</p></div> */}
                    <button onClick={() => {editIngredientContext.add(props.type)}} className="btn btn-light">+</button>
                </div>
            </li>
    );
}
export default Controller;