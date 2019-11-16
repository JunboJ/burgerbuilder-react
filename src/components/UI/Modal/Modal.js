import React, { useEffect } from 'react';
import PrimaryBtn from '../../UI/Button/PrimaryBtn';
import { Modal } from 'react-bootstrap';
import Spinner from '../../UI/Spinner/Spinner';

const ModalComponent = props => {
    useEffect(() => {
        console.log('modal updated');
    })

    let buttonText = props.primaryBtnName
    if (props.loading) {
        buttonText = <Spinner ver='white' />;
    }

    return (
        <Modal show={props.show} onHide={props.closeBtnClicked} centered >
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div><p>{props.body}</p><ul>{props.children}</ul></div>
            </Modal.Body>
            <Modal.Footer>
                <PrimaryBtn clicked={props.primaryClicked} disabled={props.primaryDisabled ? props.primaryDisabled : false}>{buttonText}</PrimaryBtn>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalComponent;