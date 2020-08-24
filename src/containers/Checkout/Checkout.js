import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import ContactInfo from "../../components/Order/CheckoutSum/ContactInfo/ContactInfo";
import CheckoutSum from "../../components/Order/CheckoutSum/CheckoutSum";

import classes from "./Checkout.module.css";

const Checkout = props => {
	console.log(props);

	return (
		<div className={classes.pageWrapper}>
			<CheckoutSum />
            <div className={classes.tabWrapper}>
                <Tabs defaultActiveKey="delivery">
                    <Tab eventKey="delivery" title="Delivery">
                        <ContactInfo {...props} deliver="delivery"/>
                    </Tab>
                    <Tab eventKey={`click&collect`} title={`Click&Collect`}>
                        <ContactInfo {...props} deliver={`C&C`}/>
                    </Tab>
                </Tabs>
            </div>
		</div>
	);
};

export default Checkout;
