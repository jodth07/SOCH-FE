import React, { Component } from "react";
import "../../styles/login.css";

import { Link, Redirect } from "react-router-dom";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class Login extends Component {
	handleRequest(event) {
		event.preventDefault();
		if (this.nameTextInput.value && this.passwordTextInput.value) {
			return true;
		}
	}

	render() {
		const user = {};

		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="mainer p-5">
								{store.session.logged_in && (
									<Redirect to="/profile/" />
								)}
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
												<div className="d-flex">
													<button
														type="submit"
														onClick={event => {
															if (
																this.handleRequest(
																	event
																)
															) {
																user.email = this.nameTextInput.value;
																user.password = this.passwordTextInput.value;
																actions.getAuth(
																	user
																);
															}
														}}
														className="btn btn-primary  p-2">
														Submit
													</button>
													<Link
														to={"/signup/"}
														className="btn btn-primary ml-auto p-2">
														create an account
													</Link>
												</div>
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
