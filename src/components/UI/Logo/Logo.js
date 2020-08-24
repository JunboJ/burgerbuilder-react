import React from 'react';
import LogoPic from '../../../assets/img/logo.png';
import classes from './Logo.module.css';

const Logo = props => {

    return (
        <div className={classes.LogoWrapper}>
            <img className={classes.LogoIcon} src={LogoPic} alt="..."></img>
            {/* <p className={classes.slogan}>{props.slogan}</p> */}
        </div>
    );
}
export default Logo;