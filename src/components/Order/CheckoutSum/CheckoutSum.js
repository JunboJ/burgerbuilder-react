import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Burger from '../../Burger/Burger';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';

import classes from './CheckoutSum.module.css';

const CheckoutSum = props => {
    const [ingState, setIngState] = useState({
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        }
    });
    console.log(ingState, props);
    return (
        <div className={classes.CheckoutSum_wrapper}>
            <h2 className={classes.SectionTitle_h2}>Your Burger: </h2>
            <div>
                <Burger ing={ingState} fromURL={props.fromURL} />
            </div>
            <div className={classes.BtnSet_wrapper}>
                <div className={classes.BtnSet}>
                    <PrimaryBtn type='light' disabled={false} clicked={() => useHistory().goBack()} >Cancel</PrimaryBtn>
                    <PrimaryBtn type='success' disabled={false} clicked={null} >Purchase</PrimaryBtn>
                </div>
            </div>
        </div>
    );
}
export default CheckoutSum;