import React from "react";
import classes from "./Order.module.css";

const order = props => {
	let ingredients = [];
	Object.keys(props.ingredients).map((key, i) => {
		ingredients.push(
			<span key={i + 1} style={{ textTransform: 'capitalize' }}><strong>{key}: </strong>({props.ingredients[key]}) </span>
		);
	})
	return (
		<div className={classes.Order}>
			<div className={classes.left_column}>
				{ingredients}
				<p>
					<strong>Price:</strong> NZD {props.price}
				</p>
			</div>
			<div className={classes.right_column}>
				<p>customer: {props.customer}</p>
			</div>
		</div>
	);
};

export default order;
