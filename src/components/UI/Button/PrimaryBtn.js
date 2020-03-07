import React from 'react';
import Button from 'react-bootstrap/Button';

const PrimaryBtn = props => {
    
    return (
        <Button onClick={props.clicked} variant={props.type} disabled={props.disabled}>
            {props.children}
        </Button>
    );
}
export default PrimaryBtn;