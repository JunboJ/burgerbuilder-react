import React from 'react';
import classes from './Backdrop.module.css';

const Bakcdrop = props => (
    props.show ? <div className={classes.Backdrop}></div> : null
);
export default Bakcdrop;