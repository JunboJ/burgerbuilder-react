import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../../UI/Logo/Logo";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar = props => {
	return (
		<div className={classes.NavBar}>
			<div onClick={props.logoClicked} className={classes.logoBtnBehaviour}>
				<Logo slogan="Build Yourself" />
			</div>
			<nav className={classes.NavItemsWrapper}>
				<NavBarItem link="/" exact> Burger </NavBarItem>
				<NavBarItem link="/orders"> Orders </NavBarItem>
			</nav>
			<span className={classes.LoginBtn}>
				<i className="far fa-user"> </i>
			</span>
		</div>
	);
};
export default NavBar;
