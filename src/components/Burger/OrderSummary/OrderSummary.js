import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Modal from '../../UI/Modal/Modal';
import axios from '../../../axios_orders';

class OrderSummary extends Component {
    state = {
        paid: false,
        modalTitle: 'Order Summary',
        modalBodyMessage: 'Here are the ingredients you ordered:',
        loading: false
    };

    moudalContinueHandler = () => {
        this.setState({
            loading: true
        });
        // const order = {
        //     ingredients: this.props.ingredients,
        //     totalPrice: this.props.totalPrice,
        //     customer: {
        //         name: 'James',
        //         address: {
        //             room: '2D',
        //             street: '4 Lorne Street',
        //             postCode: 1010
        //         },
        //         email: 'junboz598@gmail.com'
        //     },
        //     deliveryMethod: 'standard'
        // };

        // axios.post('/orders.json', order)
        //     .then(res => {
        //         this.setState({
        //             loading: false,
        //         });
        //         this.props.closeBtnClicked();
        //     })
        //     .catch(err => {
        //         this.setState({
        //             loading: false,
        //         });
        //         console.log(err);
        //     });
        const queryParam = [];
        Object.keys(this.props.ingredients).map((key, index) => {
            queryParam.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.props.ingredients[key]));
        });
        const queryString = queryParam.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString + '&' + `tp=${(this.props.totalPrice / 100).toFixed(2)}`
        });
    };

    shouldComponentUpdate = (prevProps, prevState) => {
        if (prevProps.showModal !== this.props.showModal) {
            return true;
        } else {
            if (prevState.paid !== this.state.paid) {
                return true;
            } else {
                if (prevState.loading !== this.state.loading) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    };

    render() {
        console.log(this.props);
        const ingredientsSummary = { ...this.props.ingredients };
        const ingredientsListItems = Object.keys(ingredientsSummary).map((key, index) => (
            <li key={key + index}>
                <span style={{ textTransform: 'capitalize' }}>{key} &times;{ingredientsSummary[key]}</span>
            </li>
        ));

        return (
            <Modal
                paid={this.state.paid}
                title={this.state.modalTitle}
                body={this.state.modalBodyMessage}
                primaryClicked={this.moudalContinueHandler}
                primaryBtnName='Continue'
                show={this.props.showModal}
                primaryDisabled={this.props.paid}
                closeBtnClicked={this.props.closeBtnClicked}
                loading={this.state.loading}
            >
                {ingredientsListItems}
                <div>
                    <p>
                        <b>Total Price:</b> {`${(this.props.totalPrice / 100).toFixed(2)}$`}
                    </p>
                </div>
            </Modal >
        );
    };
};
export default withRouter(OrderSummary);