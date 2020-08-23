import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Ingredient from "./Ingredient/Ingredient";

import classes from "./Burger.module.css";

export const Burger = props => {

	let data = props.ingredients;
	// if (props.match) {
	// 	data = props.match.url === "/checkout" ? props.ingredients : context;
	// } else {
	// 	data = context;
	// }
	let ingredientList = Object.keys(data)
		.map(key => {
			return [...Array(data[key])].map((_, index) => {
				return <Ingredient key={key + index} type={key} />;
			});
		})
		.reduce((prev, current) => {
			return prev.concat(current);
		}, []);

	if (ingredientList.length === 0) {
		ingredientList = <p className={classes.Hint}> Add ingredients from below! </p>;
	}

	let classNames = [classes.Burger];
	classNames.push(props.className);

	return (
		<div className={classNames.join(" ")}>
			<Ingredient type="bread-top" /> {ingredientList} <Ingredient type="bread-bottom" />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		ingredients: state.orderDetail.ingredients
	}
}
export default connect(mapStateToProps, null)(withRouter(Burger));
