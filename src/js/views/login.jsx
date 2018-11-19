import React, { Component } from "react";
import "../../styles/login.css";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
		this.accessState = this.accessState.bind(this);
	}

	accessState = () => {
		return this.state;
	};

	handleRequest(event) {
		event.preventDefault();

		if (this.nameTextInput.value && this.passwordTextInput.value) {
			const state = this.accessState();
			state.email = this.nameTextInput.value;
			state.password = this.passwordTextInput.value;
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
													<label>Email</label>
													<input
														type="email"
														ref={ref =>
															(this.nameTextInput = ref)
														}
														className="form-control"
														placeholder="Email Address"
													/>
												</div>

												<div className="form-group">
													<label>Password</label>
													<input
														type="password"
														ref={ref =>
															(this.passwordTextInput = ref)
														}
														className="form-control"
														placeholder="PassWord"
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
															actions.getAuth(
																user
															);
															if (
																store.session
																	.logged_in
															) {
																this.props.history.push(
																	"/userinfo/"
																);
															}
														}
													}}
													className="btn btn-primary">
													Submit
												</button>
												<Link
													to={"/signup/"}
													className="btn btn-primary float-right">
													create an account
												</Link>
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
