import React from 'react';

const Price = props => {
    const price = ((props.price) / 100).toFixed(2);
    return (<span>{price}</span>);
};

export default Price;