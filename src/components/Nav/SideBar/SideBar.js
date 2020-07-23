import React from "react";

import classes from "./SideBar.module.css";
import LogoIcon from "../../UI/Logo/Logo";
import NavBarItem from "../NavBar/NavBarItem/NavBarItem";
import Backdrop from "../../UI/Backdrop/Bakcdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const SideBar = props => {
	const sideBarClass = props.show ? classes.SideBarWrapper_show : classes.SideBarWrapper_hide;

	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.clicked} />
			<div className={`${classes.SidebarWrapper} ${sideBarClass}`}>
				<div className={classes.SidebarContentWrapper}>
					<button
						type="button"
						className={classes.closeBtn_wrapper}
						onClick={props.clicked}
					>
						<p className={classes.closeBtn}>&times;</p>
					</button>
					<div className={classes.SideBarLogoWrapper}>
						<LogoIcon></LogoIcon>
					</div>
					<div className={classes.SideBarItemsWrapper}>
						<NavBarItem link="/" exact>Burger</NavBarItem>
						<NavBarItem link="/orders">Orders</NavBarItem>
					</div>
				</div>
			</div>
		</Aux>
	);
};
export default SideBar;
