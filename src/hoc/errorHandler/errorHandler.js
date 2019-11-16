import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        dismissModalHandler = () => {
            this.setState({
                error: null
            });
        };

        componentDidMount() {
            axios.interceptors.response.use(res => res, err => {
                this.setState({
                    error: err.message
                });
            });
            axios.interceptors.request.use(req => req);
        }

        render() {
            return (
                <Aux>
                    <WrappedComponent {...this.props}/>
                    <Modal
                        title='Something went wrong'
                        body={null}
                        primaryClicked={this.dismissModalHandler}
                        primaryBtnName='Dismiss'
                        show={this.state.error}
                        closeBtnClicked={this.dismissModalHandler}
                    >
                        {this.state.error}
                    </Modal>
                </Aux>
            );
        }
    }
}
export default ErrorHandler;