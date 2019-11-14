import React, { useEffect } from 'react';
import classes from './Modal.module.css';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';
import { Modal, Button } from 'react-bootstrap';


const ModalComponent = props => {
    useEffect(() => {
        console.log('modal updated');
    })

    const modalBody = props.paid ? <div><p>{props.body}</p></div> : <div><p>{props.body}</p><ul>{props.children}</ul></div>;

    return (
        <Modal show={props.show} onHide={props.checkOutClicked} centered >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                <PrimaryBtn clicked={props.primaryClicked} disabled={props.disabled}>{props.primaryBtnName}</PrimaryBtn>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalComponent;