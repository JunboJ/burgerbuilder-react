import React from 'react';
import classes from './NavBar.module.css';
import Logo from '../../UI/Logo/Logo';
import NavBarItem from './NavBarItem/NavBarItem';

const NavBar = props => {
    const logoBtn = props.showSideBar ? <div className={classes.closeBtn_wrapper}><p className={classes.closeBtn}>&times;</p></div> : <Logo slogan="Build Yourself" />;
    return (
        <div className={classes.NavBar}>
            <div onClick={props.logoClicked} className={classes.logoBtnBehaviour}>
                {logoBtn}
            </div>
            <nav className={classes.NavItemsWrapper}>
                <NavBarItem link='/'>Burger</NavBarItem>
                <NavBarItem link='/'>Orders</NavBarItem>
            </nav>
            <span className={classes.LoginBtn}>
                <i className="far fa-user"></i>
            </span>
        </div>
    );
}
export default NavBar;