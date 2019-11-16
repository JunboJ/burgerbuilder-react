import React from 'react';
import classes from './Spinner.module.css';

const Spinner = props => {
    let spinnerVersion = null;
    switch (props.ver) {
        case 'white':
            spinnerVersion = classes.Loader_White;
            break;
        case 'gray':
            spinnerVersion = classes.Loader_Gray;
            break;
        default:
            spinnerVersion = classes.Loader_White;
            break;
    }
    return (
        <div className={spinnerVersion}>Loading...</div>
    );
}
export default Spinner;