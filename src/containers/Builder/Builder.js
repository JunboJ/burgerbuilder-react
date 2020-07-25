import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import Controllers from "../../components/Burger/Controllers/Controllers";
import EditIngredientContext from "../../context/editIngredient-context";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import errorHandler from "../../hoc/errorHandler/errorHandler";
import axios from "../../axios_orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Builder.module.css";

const INGREDIENT_PRICE = {
	salad: 50,
	cheese: 80,
	bacon: 40,
	meat: 100,
};

class Builder extends Component {
	state = {
		ingredients: null,
		allIngredients: null,
		totalPrice: 250,
		showModal: false,
		purchasing: false,
	};

	componentDidMount = () => {
		axios
			.get("/ingredients.json")
			.then(res => {
				const allIgList = {};
				const igList = {};
				const data = { ...res.data };
				Object.keys(data).map(key => {
					allIgList[key] = data[key];
					igList[data[key].type] = 0;
				});
				console.log(igList);
				this.setState({
					ingredients: { ...igList },
					allIngredients: { ...allIgList },
				});
			})
			.catch(err => (err ? console.log(err) : null));
	};

	toggleModal = () => {
		this.setState({
			showModal: !this.state.showModal,
		});
		if (this.state.purchasing) {
			this.purchaseCancelHandler();
		} else {
			this.purchaseHandler();
		}
	};

	addIngredientHandler = type => {
		let oldState = this.state.ingredients[type];
		const updatedState = { ...this.state.ingredients };
		updatedState[type] = oldState + 1;
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + INGREDIENT_PRICE[type];
		console.log(INGREDIENT_PRICE[type]);
		this.setState({
			ingredients: updatedState,
			totalPrice: newPrice,
		});
	};

	removeIngredientHandler = type => {
		let oldState = this.state.ingredients[type];
		if (oldState > 0) {
			const updatedState = { ...this.state.ingredients };
			updatedState[type] = oldState - 1;
			const oldPrice = this.state.totalPrice;
			const newPrice = oldPrice - INGREDIENT_PRICE[type];
			this.setState({
				ingredients: updatedState,
				totalPrice: newPrice,
			});
		}
	};

	purchaseHandler = () => {
		this.setState({
			purchasing: true,
		});
	};

	purchaseCancelHandler = () => {
		this.setState({
			purchasing: false,
		});
	};

	render() {
		let burger = <Spinner ver="gray" />;

		if (this.state.ingredients) {
			burger = (
				<EditIngredientContext.Provider
					value={{
						ingredients: this.state.ingredients,
					}}
				>
					<Burger className={classes.Burger} />
				</EditIngredientContext.Provider>
			);
		}

		return (
			<div className={classes.Builder_wrapper}>
				<OrderSummary
					closeBtnClicked={this.toggleModal}
					showModal={this.state.showModal}
					ingredients={this.state.ingredients}
					totalPrice={this.state.totalPrice}
				/>
				{burger}
				<EditIngredientContext.Provider
					value={{
						add: this.addIngredientHandler,
						remove: this.removeIngredientHandler,
					}}
				>
					<Controllers
						allIngredients={this.state.allIngredients}
						ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						checkOutClicked={this.toggleModal}
					/>
				</EditIngredientContext.Provider>
			</div>
		);
	}
}

export default errorHandler(Builder, axios);
