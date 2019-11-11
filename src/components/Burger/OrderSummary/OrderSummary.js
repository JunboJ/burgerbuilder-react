import React, { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const OrderSummary = props => {
    const ingredientsSummary = props.ingredients;
    const ingredientsListItems = Object.keys(ingredientsSummary).map((key) => {
        return (
            <li>
                <p>{key}</p>
                <p>Amount: {props.ingredients[key]}</p>
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

    const [btnState, setBtnState] = useState({
        primaryBtnName: 'Check Out',
        secondaryBtnName: 'Cancel'
    })

    const [orderSummaryState, setOrderSummaryState] = useState({
        modalTitle: 'Order Summary',
        modalBodyMessage: 'Here are the ingredients you added: '
    });

    return (
        <Modal
            paid={paidState.paid}
            title={orderSummaryState.modalTitle}
            body={orderSummaryState.modalBodyMessage}
            clicked={checkOutHandler}
            disabled={paidState.paid}
            primaryBtnName={btnState.primaryBtnName}
            secondaryBtnName={btnState.secondaryBtnName}
        >{ingredientsListItems}</Modal>
    );
}
export default OrderSummary;