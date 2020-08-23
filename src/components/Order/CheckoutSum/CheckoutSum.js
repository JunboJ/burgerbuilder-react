import React from "react";
import { withRouter } from "react-router-dom";

import Burger from "../../Burger/Burger";
import PrimaryBtn from "../../UI/Button/PrimaryBtn";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

import classes from "./CheckoutSum.module.css";

const CheckoutSum = props => {
	const cancelHandler = () => {
		props.history.goBack();
	};

	const continueHandler = () => {
		props.history.replace(props.location.pathname + "/place-order" + props.location.search);
	};

	return (
		<div className={classes.CheckoutSum_wrapper}>
			<div className={classes.CheckoutBurger_wrapper}>
				<Burger />
			</div>
			<div className={classes.BtnSet_wrapper}>
				<div className={classes.BtnSet}>
					{props.location.pathname === "/checkout" ? null : (
						<Aux>
							<PrimaryBtn type="light" disabled={false} clicked={cancelHandler}>
								Cancel
							</PrimaryBtn>
							<PrimaryBtn type="success" disabled={false} clicked={continueHandler}>
								{`Click&Collect`}
							</PrimaryBtn>
							<PrimaryBtn type="success" disabled={false} clicked={continueHandler}>
								{`Deliver`}
							</PrimaryBtn>
						</Aux>
					)}
				</div>
			</div>
		</div>
	);
};
export default withRouter(CheckoutSum);
