import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Burger from '../../Burger/Burger';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';

import classes from './CheckoutSum.module.css';

const CheckoutSum = props => {
    const [dataState, setDataState] = useState({
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 2,
            meat: 1
        },
        totalPrice: null
    });

    const cancelHandler = () => {
        props.history.goBack();
    }

    const continueHandler = () => {
        props.history.replace('/checkout/place-order');
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
    }

    const parseUrl = () => {
        const query = new URLSearchParams(props.location.search);
        return query;
    }

    useEffect(() => {
        let data = {
            ingredients: {},
            totalPrice: null
        };
        const query = parseUrl();
        console.log(query.entries().next());
        query.forEach((index, val) => {
            console.log(index, val);
            val === 'tp' ? data['totalPrice'] = parseInt(index) : data['ingredients'][val] = parseFloat(index);
        });
        setDataState(data);
    }, []);

    return (
        <div className={classes.CheckoutSum_wrapper}>
            <h3 className={classes.SectionTitle_h2}>Your Burger: </h3>
            <div>
                <Burger ing={dataState} />
            </div>
            <div className={classes.BtnSet_wrapper}>
                <div className={classes.BtnSet}>
                    <PrimaryBtn type='light' disabled={false} clicked={cancelHandler} >Cancel</PrimaryBtn>
                    <PrimaryBtn type='success' disabled={false} clicked={continueHandler} >Purchase</PrimaryBtn>
                </div>
            </div>
        </div>
    );
}
export default withRouter(CheckoutSum);