import React, { useEffect } from 'react';
import classes from './Modal.module.css';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';
import { Modal, Button } from 'react-bootstrap';
import Spinner from '../../UI/Spinner/Spinner';

const ModalComponent = props => {
    useEffect(() => {
        console.log('modal updated');
    })

    let buttonText = props.primaryBtnName
    if (props.loading) {
        buttonText = <Spinner />;
    }

    return (
        <Modal show={props.show} onHide={props.checkOutClicked} centered >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div><p>{props.body}</p><ul>{props.children}</ul></div>
            </Modal.Body>
            <Modal.Footer>
                <PrimaryBtn clicked={props.primaryClicked} disabled={props.primaryDisabled}>{buttonText}</PrimaryBtn>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalComponent;