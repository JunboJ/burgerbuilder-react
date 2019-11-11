import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../UI/Logo/Logo';

const NavBar = props => {
    
    return (
        <div className={classes.NavBar}>
            <div>
                <Logo slogan="Build Yourself"/>
            </div>
            <nav>
                <div>
                    Bergur
                </div>
            </nav>
        </div>
    );
}
export default NavBar;