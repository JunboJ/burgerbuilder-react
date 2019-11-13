import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavBarItem from './NavBarItem/NavBarItem';

const NavBar = props => {

    return (
        <div className={classes.NavBar}>
            <div>
                <Logo slogan="Build Yourself" />
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
export default NavBar;