import React, { useState, useEffect } from 'react';

import CheckoutSum from '../../components/Order/CheckoutSum/CheckoutSum';

const Checkout = props => {
    console.log(props);
    const [posState, setPosState] = useState({
        checkoutBurger: false
    });
    let url = props.match ? props.match.url : null;

    // useEffect(() => {
    //     console.log(url);
    //     if (url == '/checkout') setPosState({ checkoutBurger: true });
    // });

    return (
        <CheckoutSum fromURL={url} />
    );
}
export default Checkout;