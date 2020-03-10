import React, { useState, useEffect, ReactFragment } from 'react';
import { Route } from 'react-router-dom';

import ContactInfo from '../../components/Order/CheckoutSum/ContactInfo/ContactInfo';
import CheckoutSum from '../../components/Order/CheckoutSum/CheckoutSum';

import classes from './Checkout.module.css';

const Checkout = props => {
    console.log(props);

    const [DATASTATE, SETDATASTATE] = useState({
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        },
        totalPrice: null
    });

    useEffect(() => {
        let data = {
            ingredients: {},
            totalPrice: null
        };

        const parseUrl = () => {
            const query = new URLSearchParams(props.location.search);
            return query;
        }

        const query = parseUrl();

        query.forEach((index, val) => {
            console.log(index, val);
            val === 'tp' ? data['totalPrice'] = parseInt(index) : data['ingredients'][val] = parseFloat(index);
        });
        SETDATASTATE(data);
    }, []);

    return (
        <div className={classes.pageWrapper}>
            <CheckoutSum ing={DATASTATE} />
            <Route path={props.match.path + '/place-order'}
                render={() => <ContactInfo ing={DATASTATE} {...props} />} />
        </div>
    );
}
export default Checkout;