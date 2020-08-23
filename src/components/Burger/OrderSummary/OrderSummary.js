import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Modal from '../../UI/Modal/Modal';
import Price from '../../Price/Price';

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

        this.props.history.push({
            pathname: '/checkout'
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
                        <b>Total Price:</b> <Price price={this.props.totalPrice} />
                    </p>
                </div>
            </Modal >
        );
    };
};
export default withRouter(OrderSummary);