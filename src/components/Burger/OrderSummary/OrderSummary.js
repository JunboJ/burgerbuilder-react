import React, { useState, Component } from 'react';
import Modal from '../../UI/Modal/Modal';

class OrderSummary extends Component {
    state = {
        paid: false,
        modalTitle: 'Order Summary',
        modalBodyMessage: 'Here are the ingredients you ordered:'
    }

    checkOutHandler = () => {
        this.setState({
            paid: true,
            modalTitle: 'Order Summary',
            modalBodyMessage: 'Your order is being processing! Thank you!'
        });
    };

    shouldComponentUpdate = (prevProps, prevState) => {
        if (prevProps.showModal !== this.props.showModal) {
            console.log(prevProps.showModal);
            console.log(this.props.showModal);
            return true;
        } else {
            if (prevState.paid !== this.state.paid) {
                return true;
            } else {
                return false;
            }
        }
    };

    // checkOutHandler = () => {
    //     setPaidState({
    //         paid: true
    //     });
    //     setOrderSummaryState({
    //         modalTitle: 'Order Summary',
    //         modalBodyMessage: 'Your order is being processing! Thank you!'
    //     })
    // };

    // const [paidState, setPaidState] = useState({
    //     paid: false
    // });

    // const [orderSummaryState, setOrderSummaryState] = useState({
    //     modalTitle: 'Order Summary',
    //     modalBodyMessage: 'Here are the ingredients you added: '
    // });

    render() {
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
                primaryClicked={this.checkOutHandler}
                primaryDisabled={this.state.paid}
                primaryBtnName='Continue'
                secondaryBtnName='Cancel'
                show={this.props.showModal}
                checkOutClicked={this.props.checkOutClicked}
            >
                {ingredientsListItems}
                <div>
                    <p>
                        <b>Total Price:</b> {`${(this.props.totalPrice / 100).toFixed(2)}$`}
                    </p>
                </div>
            </Modal >
        );
    }
}
export default OrderSummary;