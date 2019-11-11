import React from 'react';
import classes from './Modal.module.css';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';


const Modal = props => {
const modalBody = props.paid ? <div><p>{props.body}</p></div> : <div><p>{props.body}</p><ul>{props.children}</ul></div>;

    return (
        <div className='modal fade' id='orderSummaryModal' data-backdrop='true'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {modalBody}
                    </div>
                    <div className='modal-footer'>
                        <PrimaryBtn clicked={props.primaryClicked} disabled={props.disabled}>{props.primaryBtnName}</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;