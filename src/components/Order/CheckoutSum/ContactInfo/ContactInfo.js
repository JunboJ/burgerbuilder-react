import React from "react";
import { Component } from "react";
import { Form, Button } from "react-bootstrap";

import Spinner from "../../../UI/Spinner/Spinner";
import axios from "../../../../axios_orders";
import classes from "./ContactInfo.module.css";
import Input from "../../../UI/Input/Input";

class ContactInfo extends Component {
	state = {
		form: {
			name: {
				title: "Name",
				type: "text",
				configure: {
					placeholder: "Enter name",
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			email: {
				title: "Email",
				type: "email",
				configure: {
					placeholder: "Email address",
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			street: {
				title: "Street",
				type: "text",
				configure: {
					placeholder: "Street number",
				},
				value: '',
				validation: {
					required: this.props.deliver == "delivery"
				},
				valid: false
			},
			suburb: {
				title: "Suburb",
				type: "text",
				configure: {
					placeholder: "(e.g., CBD)",
				},
				value: '',
				validation: {
					required: this.props.deliver == "delivery"
				},
				valid: false
			},
			postcode: {
				title: "Postcode",
				type: "text",
				configure: {
					placeholder: "(e.g., 1010)",
				},
				value: '',
				validation: {
					required: this.props.deliver == "delivery",
					minLength: 4
				},
				valid: false
			},
			branches: {
				title: "Shop branches",
				type: "select",
				options: ["Albany", "CBD", "Eden Terrace", "Gray Lynn"],
				configure: {},
				value: 'CBD',
				validation: {
					required: this.props.deliver != "delivery"
				},
				valid: true
			}
			// delivery: {
			// 	title: "Delivery method",
			// 	type: "select",
			// 	options: ["Click&Collect", "Deliver"],
			// 	configure: {},
			// 	value: 'Click&Collect',
			// 	validation: {
			// 		required: true
			// 	},
			// 	valid: false
			// },
		},
		loading: false,
	};

	validator = (value, rule) => {
		let isValid = true;

		if (rule.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rule.minLength) {
			isValid = value.trim().length >= rule.minLength && isValid;
		}

		return isValid;
	}

	onChangeHandler = (event, key) => {
		console.log(event.target.value, key);
		const updatedForm = {
			...this.state.form
		}
		const updatedFormControl = {
			...updatedForm[key]
		}
		updatedFormControl.value = event.target.value;
		updatedFormControl.valid = this.validator(updatedFormControl.value, updatedFormControl.validation)
		updatedForm[key] = updatedFormControl;
		this.setState({ form: updatedForm });
	};

	orderHandler = event => {
		let updatedState = { ...this.state.form };
		updatedState.loading = true;
		this.setState(updatedState);
		let submitForm = {};
		for (let formControlKey in this.state.form) {
			submitForm[formControlKey] = this.state.form[formControlKey];
		}
		const order = {
			ingredients: this.props.ing.ingredients,
			totalPrice: this.props.ing.totalPrice,
			customer: {
				name: submitForm.name.value,
				email: submitForm.email.value,
				address: {
					street: submitForm.street.value,
					suburb: submitForm.suburb.value,
					postCode: submitForm.postcode.value,
				},
			},
			deliveryMethod: this.props.deliver,
		};

		axios
			.post("/orders.json", order)
			.then(res => {
				let updatedState = { ...this.state.form };
				updatedState.loading = false;
				this.setState(updatedState);
				this.props.history.push("/");
			})
			.catch(err => {
				let updatedState = { ...this.state.form };
				updatedState.loading = false;
				this.setState(updatedState);
				console.log(err);
			});
	};

	cancleHandler = () => {
		this.props.history.goBack();
	}

	render() {
		let button = this.state.loading ? <Spinner /> : "Submit";
		return (
			<div className={classes.Contact_wrapper}>
				<h3>Enter your address: </h3>
				<div className={classes.Form_wrapper}>
					<Form>
						{Object.keys(this.state["form"]).filter((key) => {
							if (this.state.form[key].validation.required) {
								return true;
							}
							return false;
						}).map((key, i) => (
							<Input
								key={`${key}_${i}`}
								title={this.state.form[key].title}
								type={this.state.form[key].type}
								configure={this.state.form[key].configure}
								options={
									this.state.form[key].options
										? this.state.form[key].options
										: null
								}
								onChange={event => this.onChangeHandler(event, key)}
								valid={this.state.form[key].valid}
							/>
						))}
						<Form.Row>
							<Form.Group controlId="remember me">
								<Form.Check type="checkbox" label="Remember me next time" />
							</Form.Group>
						</Form.Row>
						<Button variant="primary" type="button" onClick={this.orderHandler}>
							{button}
						</Button>
						<Button variant="light" type="button" onClick={this.cancleHandler}>
							Cancel
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
export default ContactInfo;
