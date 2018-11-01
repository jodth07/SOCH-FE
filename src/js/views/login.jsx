import React, { Component } from "react";
import "../../styles/login.css";
// import {LogingIn} from "../component/loginIn";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: ""
		};
		this.accessState = this.accessState.bind(this);
	}

	accessState = () => {
		return this.state;
	};

	handleRequest(event) {
		event.preventDefault();

		if (this.nameTextInput.value && this.emailTextInput.value) {
			const state = this.accessState();
			state.username = this.nameTextInput.value;
			state.email = this.emailTextInput.value;
			this.setState(state);
			return true;
		}
	}

	render() {
		const user = this.state;
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="mainer p-5">
								<div className="row justify-content-center mt-5">
									<div className="bg-light p-5 col-6 rounded">
										<div className="container ">
											<form>
												<div className="form-group">
													<label>User Name</label>
													<input
														type="userName"
														ref={ref =>
															(this.nameTextInput = ref)
														}
														className="form-control"
														placeholder="username"
													/>
												</div>

												<div className="form-group">
													<label>Email Address</label>
													<input
														type="email"
														ref={ref =>
															(this.emailTextInput = ref)
														}
														className="form-control"
														placeholder="email "
													/>
												</div>

												<button
													type="submit"
													onClick={event => {
														if (
															this.handleRequest(
																event
															)
														) {
															if (
																actions.isLegalUser(
																	user
																)
															) {
																this.props.history.push(
																	"/"
																);
															}
														}
													}}
													className="btn btn-primary">
													Submit
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}

export default Login;

Login.propTypes = {
	history: PropTypes.object
};
