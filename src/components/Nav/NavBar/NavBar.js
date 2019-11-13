import React, { useState } from 'react';
import Radium from 'radium';
import classes from './NavBar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavBarItem from './NavBarItem/NavBarItem';

const NavBar = props => {
    const logoBtn = props.showSideBar ? <div><p style={{ fontSize: '1.8rem', textAlign: 'center', color: 'white'}}>&times;</p></div> : <Logo slogan="Build Yourself" />;
    return (
        <div className={classes.NavBar}>
            <div onClick={props.logoClicked} className={classes.logoBtnBehaviour}>
                {logoBtn}
            </div>
            <nav className={classes.NavItemsWrapper}>
                <NavBarItem link='/'>Burger</NavBarItem>
            </nav>
            <span className={classes.LoginBtn}>
                <i class="far fa-user fa-1x"></i>
            </span>
        </div>
    );
}
export default Radium(NavBar);