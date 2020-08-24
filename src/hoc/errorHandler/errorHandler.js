import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const ErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null,
		};

		dismissModalHandler = () => {
			this.setState({
				error: null,
			});
		};

		constructor() {
			super();
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				err => {
					this.setState({
						error: err.message,
					});
				}
			);
			this.reqInterceptor = axios.interceptors.request.use(req => req);
		}

		componentWillUnmount() {
			// console.log('unmount', this.reqInterceptor, this.resInterceptor);
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		render() {
			return (
				<Aux>
					<WrappedComponent {...this.props} />
					<Modal
						title="Something went wrong"
						body={null}
						primaryClicked={this.dismissModalHandler}
						primaryBtnName="Dismiss"
						show={this.state.error}
						closeBtnClicked={this.dismissModalHandler}
					>
						{this.state.error}
					</Modal>
				</Aux>
			);
		}
	};
};
export default ErrorHandler;
