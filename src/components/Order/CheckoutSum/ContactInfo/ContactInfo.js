import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from '../../../../axios_orders';
import classes from './ContactInfo.module.css';

const ContactInfo = props => {
    console.log(props);

    const [contactInfoState, setContactInfoState] = useState({
        customer: {
            name: 'James',
            address: {
                room: '2D',
                street: '4 Lorne Street',
                postCode: 1010
            },
            email: 'junboz598@gmail.com'
        }
    });

    const [LoadingState, setLoadingState] = useState({
        loading: true
    });

    const orderHandler = () => {
        const order = {
            ingredients: props.ingredients,
            totalPrice: props.totalPrice,
            customer: {
                name: 'James',
                address: {
                    room: '2D',
                    street: '4 Lorne Street',
                    postCode: 1010
                },
                email: 'junboz598@gmail.com'
            },
            deliveryMethod: 'standard'
        };

        axios.post('/orders.json', order)
            .then(res => {
                setLoadingState({
                    loading: false,
                });
                // props.closeBtnClicked();
            })
            .catch(err => {
                setLoadingState({
                    loading: false,
                });
                console.log(err);
            });
    }

    return (
        <div className={classes.Contact_wrapper}>
            <h3>Enter your address: </h3>
            <div className={classes.Form_wrapper}>
                <Form>
                    <Form.Row>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="room">
                            <Form.Label>Room</Form.Label>
                            <Form.Control type="text" placeholder="(e.g., 2D, 403)" />
                        </Form.Group>
                        <Form.Group controlId="building">
                            <Form.Label>Apartment, studio, floor</Form.Label>
                            <Form.Control type="text" placeholder="(Building, Apartment)" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="street">
                            <Form.Label>Street</Form.Label>
                            <Form.Control type="text" placeholder="Street" />
                        </Form.Group>
                        <Form.Group controlId="postcode">
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="number" placeholder="(e.g., 1040)" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="remember me">
                            <Form.Check type="checkbox" label="Remember me next time" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default ContactInfo;