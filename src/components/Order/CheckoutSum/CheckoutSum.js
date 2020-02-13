import React, { useContext } from 'react';

import Burger from '../../Burger/Burger';

const CheckoutSum = props => {
    return (
        <div>
            <h1>Your Burger</h1>
            <div>
                <Burger />
            </div>
        </div>
    );
}
export default CheckoutSum;