import React from 'react';

import classes from './SideBar.module.css';
import LogoIcon from '../../UI/Logo/Logo';
import NavBarItem from '../NavBar/NavBarItem/NavBarItem';

const SideBar = props => {

    return (
        <div className={classes.SideBarWrapper}>
            <div className={classes.SideBarLogoWrapper}>
                <LogoIcon ></LogoIcon>
            </div>
            <div className={classes.SideBarItemsWrapper}>
                <NavBarItem link='/'>Home</NavBarItem>
                <NavBarItem link='/'>Burger</NavBarItem>
            </div>
        </div>
    );
}
export default SideBar;