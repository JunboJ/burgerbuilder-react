import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Burger from "../../components/Burger/Burger";
import Controllers from "../../components/Burger/Controllers/Controllers";
import EditIngredientContext from "../../context/editIngredient-context";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import errorHandler from "../../hoc/errorHandler/errorHandler";
import axios from "../../axios_orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Builder.module.css";


class Builder extends Component {
	state = {
		// ingredients: null,
		// allIngredients: null,
		// totalPrice: 250,
		showModal: false,
		purchasing: false,
	};

	componentDidMount = () => {
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

		if (this.props.ingredients) {
			burger = (
				<EditIngredientContext.Provider
					value={{
						ingredients: this.props.ingredients,
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
					ingredients={this.props.ingredients}
					totalPrice={this.props.totalPrice}
				/>
				{burger}
				<EditIngredientContext.Provider
					value={{
						add: this.props.addIngredientHandler,
						remove: this.props.removeIngredientHandler,
					}}
				>
					<Controllers
						ingredients={this.props.ingredients}
						price={this.props.totalPrice}
						checkOutClicked={this.toggleModal}
					/>
				</EditIngredientContext.Provider>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.orderDetail.ingredients,
		totalPrice: state.orderDetail.totalPrice
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addIngredientHandler: (ing) => dispatch({ type: actions.ADD_INGREDIENT, ingredient: ing}),
		removeIngredientHandler: (ing) => dispatch({ type: actions.REMOVE_INGREDIENT, ingredient: ing})
	}
}

export default errorHandler(connect(mapStateToProps, mapDispatchToProps)(Builder), axios);
