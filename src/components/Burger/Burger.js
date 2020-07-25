import React, { useContext } from "react";
import { withRouter } from "react-router-dom";

import Ingredient from "./Ingredient/Ingredient";
import EditIngredientContext from "../../context/editIngredient-context";

import classes from "./Burger.module.css";

const Burger = props => {
	const context = useContext(EditIngredientContext);
	let data = null;
	if (props.match) {
		data = props.match.url === "/checkout" ? props.ing : context;
	} else {
		data = context;
	}
	console.log(data);
	let ingredientList = Object.keys(data.ingredients)
		.map(key => {
			return [...Array(data.ingredients[key])].map((_, index) => {
				return <Ingredient key={key + index} type={key} />;
			});
		})
		.reduce((prev, current) => {
			return prev.concat(current);
		}, []);

	if (ingredientList.length === 0) {
		ingredientList = <p className={classes.Hint}>Add ingredients from below!</p>;
    }
    
    let classNames = [classes.Burger];
    classNames.push(props.className);

	return (
		<div className={classNames.join(' ')}>
			<Ingredient type="bread-top" />
			{ingredientList}
			<Ingredient type="bread-bottom" />
		</div>
	);
};
export default withRouter(Burger);
