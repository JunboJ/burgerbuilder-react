import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const OrderSummary = props => {
    const ingredientsSummary = props.ingredients;
    const ingredientsListItems = Object.keys(ingredientsSummary).map((key) => {
        return (
            <li>
                <p>{key} &times;{props.ingredients[key]}</p>
            </li>
        )
    });

    const checkOutHandler = () => {
        setPaidState({
            paid: true
        });
        setOrderSummaryState({
            modalTitle: 'Order Summary',
            modalBodyMessage: 'Your order is being processing! Thank you!'
        })
    };

    const [paidState, setPaidState] = useState({
        paid: false
    });

    const [orderSummaryState, setOrderSummaryState] = useState({
        modalTitle: 'Order Summary',
        modalBodyMessage: 'Here are the ingredients you added: '
    });

    return (
        <Modal
            paid={paidState.paid}
            title={orderSummaryState.modalTitle}
            body={orderSummaryState.modalBodyMessage}
            primaryClicked={checkOutHandler}
            primaryDisabled={paidState.paid}
            primaryBtnName='Continue'
            secondaryBtnName='Cancel'
        >
            {ingredientsListItems}
            <div>
                <p>
                    <b>Total Price:</b> {`${(props.totalPrice/100).toFixed(2)}$`}
                </p>
            </div>
        </Modal>
    );
}
export default OrderSummary;