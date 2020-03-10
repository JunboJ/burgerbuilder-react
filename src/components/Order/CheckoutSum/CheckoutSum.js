import React from 'react';
import { withRouter } from 'react-router-dom';

import Burger from '../../Burger/Burger';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';

import classes from './CheckoutSum.module.css';

const CheckoutSum = props => {
    console.log(props);
    const cancelHandler = () => {
        props.history.goBack();
    }

    const continueHandler = () => {
        props.history.replace(props.location.pathname + '/place-order' + props.location.search);
    }

    return (
        <div className={classes.CheckoutSum_wrapper}>
            <h3 className={classes.SectionTitle_h2}>Your Burger: </h3>
            <div className={classes.CheckoutBurger_wrapper}>
                <Burger ing={props.ing} />
            </div>
            <div className={classes.BtnSet_wrapper}>
                <div className={classes.BtnSet}>
                    <PrimaryBtn type='light' disabled={false} clicked={cancelHandler} >Cancel</PrimaryBtn>
                    <PrimaryBtn type='success' disabled={false} clicked={continueHandler} >Purchase</PrimaryBtn>
                </div>
            </div>
        </div>
    );
}
export default withRouter(CheckoutSum);