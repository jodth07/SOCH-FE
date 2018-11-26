import React, { Component } from "react";
import PropTypes from "prop-types";

// Local imports
import { Context } from "../store/appContext.jsx";
import AddressAddUpdate from "../component/profile/address.jsx";

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: ""
			},
			email_exits: "none"
		};
		this.getUser = this.getUser.bind(this);
	}

	setErrors = () => {
		let state = this.state;
		state.user.email = "";
		state.email_exits = "block";
		this.setState(state);
	};

	getUser = () => {
		return this.state.user;
	};

	handleRequest(event) {
		event.preventDefault();
		var user = this.getUser();

		if (user.password1 == user.password2) {
			user.password = user.password1;
			return true;
		} else {
			alert("The passwords do not match!");
		}
	}

	render() {
		var user = this.getUser();
		var email_exits = this.state.email_exits;
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<div>
								<div
									className="alert alert-danger container "
									style={{ display: this.state.email_exits }}
									role="alert">
									A user with this email already exists.
									Please use a different email or sign in.
								</div>
								<form
									className="p-5 container col-6"
									role="form">
									<div className="form-row">
										<div className="col-md-6 mb-3 p-1">
											<label
												htmlFor="firstName"
												className="control-label">
												First name
											</label>
											<input
												type="text"
												className="form-control"
												id="firstName"
												placeholder="First name"
												required
												onChange={e =>
													(user.first_name =
														e.target.value)
												}
											/>
										</div>

										<div className="col-md-6 mb-3 p-1">
											<label htmlFor="lastName">
												Last name
											</label>
											<input
												type="text"
												className="form-control"
												id="lastName"
												placeholder="Last name"
												required
												onChange={e =>
													(user.last_name =
														e.target.value)
												}
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md-12 mb-3">
											<label htmlFor="=email">
												Email Address
											</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span
														className="input-group-text"
														id="email">
														@
													</span>
												</div>
												<input
													type="text"
													className="form-control"
													id="email"
													placeholder="email"
													aria-describedby="email"
													required
													onChange={e =>
														(user.email =
															e.target.value)
													}
												/>
											</div>
										</div>
									</div>

									<div className="form-row">
										<div className="col-md-12 mb-3">
											<label htmlFor="password">
												Password
											</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span
														className="input-group-text"
														id="password"
													/>
												</div>
												<input
													type="password"
													className="form-control"
													id="password"
													placeholder="Password"
													aria-describedby="password"
													required
													onChange={e =>
														(user.password1 =
															e.target.value)
													}
												/>
											</div>
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-12 mb-3">
											<label htmlFor="password1">
												Confirm Password
											</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span
														className="input-group-text"
														id="password1"
													/>
												</div>
												<input
													type="password"
													className="form-control"
													id="password1"
													placeholder="Confirm Password"
													aria-describedby="password1"
													required
													onChange={e =>
														(user.password2 =
															e.target.value)
													}
												/>
											</div>
										</div>
									</div>

									<hr className="my-4" />

									<button
										className="btn btn-primary col-md-12 mb-3 mt-4"
										type="submit"
										onClick={event => {
											this.setState({ user });
											if (this.handleRequest(event)) {
												if (actions.createUser(user)) {
													this.props.history.push(
														"/userinfo/"
													);
												} else {
													this.setErrors();
												}
											}
										}}>
										Create Account
									</button>
								</form>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}

SignUp.propTypes = {
	history: PropTypes.object
};
