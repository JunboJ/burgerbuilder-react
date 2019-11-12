import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavBarItem from './NavBarItem/NavBarItem';

const NavBar = props => {
    
    return (
        <div className={classes.NavBar}>
            <div>
                <Logo slogan="Build Yourself"/>
            </div>
            <nav className={classes.NavItemsWrapper}>
                <NavBarItem>Burger</NavBarItem>
            </nav>
        </div>
    );
}
export default NavBar;