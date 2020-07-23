import React from "react";
import classes from "./NavBarItem.module.css";
import { NavLink } from "react-router-dom";

const NavBarItem = props => {
	return (
		<div className={classes.NavBarItem}>
			<NavLink to={props.link} className={classes.anchor} activeClassName={classes.active} exact={props.exact}>
				<strong> {props.children} </strong>
			</NavLink>
		</div>
	);
};
export default NavBarItem;
