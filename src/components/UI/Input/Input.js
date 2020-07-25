import React from "react";
import classes from './Input.module.css';
import { Form, Button } from "react-bootstrap";

const input = props => {
	let inputEl = null;

	switch (props.type) {
		case "text":
		case "email":
			return (
				<Form.Group>
					<Form.Label>{props.title}</Form.Label>
					<Form.Control
						className={props.valid ? classes.valid : classes.invalid}
						type={props.type}
						{...props.configure}
						onChange={props.onChange}
					/>
					{props.info ? <Form.Text className="text-muted">{props.info}</Form.Text> : null}
				</Form.Group>
			);
		case "checkbox":
			return (
				<Form.Group>
					<Form.Check
						type="checkbox"
						label={props.title}
						{...props.configure}
						onChange={props.onChange}
					/>
				</Form.Group>
			);
		case "select":
			return (
				<Form.Group>
					<Form.Label>{props.title}</Form.Label>
					<Form.Control as="select" {...props.configure} onChange={props.onChange}>
						{props.options.map((item, i) => {
							return <option key={i}>{item}</option>;
						})}
					</Form.Control>
				</Form.Group>
			);
		default:
			break;
	}

	return inputEl;
};

export default input;
