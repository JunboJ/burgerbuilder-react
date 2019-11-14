import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryBtn = props => {
    
    return (
        <Button onClick={props.clicked} variant="primary" disabled={props.disabled}>
            {props.children}
        </Button>
    );
}
export default PrimaryBtn;