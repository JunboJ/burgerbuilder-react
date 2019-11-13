import React from 'react';

import classes from './SideBar.module.css';
import LogoIcon from '../../UI/Logo/Logo';
import NavBarItem from '../NavBar/NavBarItem/NavBarItem';
import Backdrop from '../../UI/Backdrop/Bakcdrop';
import Aux from '../../../hoc/Auxiliary';

const SideBar = props => {
    const sideBarClass = props.show ? classes.SideBarWrapper_show : classes.SideBarWrapper_hide

    return (
        <Aux>
            <Backdrop show={props.show} />
            <div className={sideBarClass}>
                <div className={classes.SideBarLogoWrapper}>
                    <LogoIcon ></LogoIcon>
                </div>
                <div className={classes.SideBarItemsWrapper}>
                    <NavBarItem link='/'>Home</NavBarItem>
                    <NavBarItem link='/'>Burger</NavBarItem>
                </div>
            </div>
        </Aux>
    );
}
export default SideBar;