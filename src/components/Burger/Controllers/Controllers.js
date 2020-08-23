import React from 'react';
import classes from './Controllers.module.css';
import Controller from './Controller/Controller';
import Spinner from '../../UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Price from '../../Price/Price';

const Controllers = props => {
    let ulClassNamesArr = ["list-group", classes.controllerGroup];
    let ulClassNames = ulClassNamesArr.join(" ");

    let checkoutBtn = <Spinner ver="gray" />;
    let totalIngredientAmount = null;
    if (props.ingredients) {
        totalIngredientAmount = Object.keys(props.ingredients).map((key) => {
            return props.ingredients[key];
        }).reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        checkoutBtn = (
            <Aux>
                {`Check Out  `}
                <span className={totalIngredientAmount === 0 ? classes.CheckOutUnchecked : classes.CheckOutChecked}>
                    <i className="fas fa-check"></i>
                </span>
            </Aux>
        );
    }

    let controllers = <Spinner ver='gray' />;
    if (props.ingredients) {
        controllers = Object.keys(props.ingredients).map((key, i) => {
            // const ingList = { ...props.ingredients };
            return (
                <Controller
                    key={key}
                    label={key}
                    type={key}
                    disable={props.ingredients[key] === 0}
                />
            );
        });
    };

    return (
        <div className={classes.Controllers}>
            <ul className={ulClassNames}>
                {controllers}
            </ul>
            <h4 className={classes.TotalPrice}>Total Price: $<Price price={props.price} /></h4>
            <button
                disabled={totalIngredientAmount ? totalIngredientAmount === 0 : true}
                className={`btn btn-warning btn btn-primary ${classes.CheckOut}`}
                type="button"
                onClick={props.checkOutClicked}
            >{checkoutBtn}
            </button>
        </div>
    );
}
export default Controllers;