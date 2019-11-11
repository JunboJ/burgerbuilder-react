import React from 'react';

const PrimaryBtn = props => {
    
    return (
        <button onClick={props.clicked} className={`btn btn-primary`} disabled={props.disabled}>
            {props.children}
        </button>
    );
}
export default PrimaryBtn;