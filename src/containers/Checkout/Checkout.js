import React, { useState, useEffect, ReactFragment } from 'react';
import { Route } from 'react-router-dom';

import ContactInfo from '../../components/Order/CheckoutSum/ContactInfo/ContactInfo';
import CheckoutSum from '../../components/Order/CheckoutSum/CheckoutSum';

import classes from './Checkout.module.css';

const Checkout = props => {
    console.log(props);
    const [posState, setPosState] = useState({
        checkoutBurger: false
    });

    return (
        <div className={classes.pageWrapper}>
            <CheckoutSum />
            <Route path={props.match.path + '/place-order'} component={ContactInfo} />
        </div>
    );
}
export default Checkout;