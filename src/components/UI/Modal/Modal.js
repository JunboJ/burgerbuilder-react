import React from 'react';
import classes from './Modal.module.css';

const Modal = props => {

    return (
        <div className='modal fade' id='orderSummaryModal' data-backdrop='false'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className="modal-title">Order Summary</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {props.children}
                    </div>
                    <div className='modal-footer'>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;