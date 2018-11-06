import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: "",
				email: ""
			}
		};
		this.getUser = this.getUser.bind(this);
	}

	getUser = () => {
		return this.state.user;
	};

	handleRequest(event) {
		event.preventDefault();
		var newUser = this.getUser();
		// var user;
		// for (var key in newUser) {
		// 	if (newUser.hasOwnProperty(key)) {
		// 		newUser[key] = newUser[key].value;
		// 		console.log(newUser[key].value);
		// 	}
		// }

		if (newUser) {
			console.log(newUser);
			return true;
		}
	}

	render() {
		var user = this.getUser();
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form className="container col-6" role="form">
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
												(user.firstname =
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
												(user.lastname = e.target.value)
											}
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="col-md-12 mb-3">
										<label htmlFor="=username">
											Username
										</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span
													className="input-group-text"
													id="username">
													@
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="username"
												placeholder="Username"
												aria-describedby="username"
												required
												onChange={e =>
													(user.username =
														e.target.value)
												}
											/>
										</div>
									</div>
								</div>

								<div className="form-row">
									<div className="col-md-12 mb-3">
										<label htmlFor="email">Email</label>
										<div className="input-group">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="Email"
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

								<div className="form-row">
									<div className="col-md-12 mb-3">
										<label htmlFor="address">Address</label>

										<input
											type="text"
											className="form-control"
											id="address"
											placeholder="Full Address"
											required
											onChange={e =>
												(user.address = e.target.value)
											}
										/>
									</div>
								</div>

								<div className="form-row">
									<div className="col-md-6 mb-3">
										<label htmlFor="city">City</label>
										<input
											type="text"
											className="form-control"
											id="city"
											placeholder="City"
											required
											onChange={e =>
												(user.city = e.target.value)
											}
										/>
									</div>

									<div className="col-md-3 mb-3">
										<label htmlFor="validationServer04">
											State
										</label>
										<select
											onChange={e =>
												(user.state = e.target.value)
											}
											id="inputState"
											className="form-control">
											<option value>State</option>
											<option>FL</option>
											<option>GA</option>
											<option>NY</option>
											<option>CA</option>
											<option>TX</option>
											<option>DE</option>
											<option>AR</option>
											<option>CO</option>
											<option>AZ</option>
											<option>CT</option>
											<option>AK</option>
											<option>HI</option>
										</select>
									</div>

									<div className="col-md-3 mb-3">
										<label htmlFor="validationServer05">
											Zip
										</label>
										<input
											type="text"
											className="form-control"
											id="validationServer05"
											placeholder="Zip"
											required
											onChange={e =>
												(user.zipCode = e.target.value)
											}
										/>
									</div>
								</div>
								<hr className="my-4" />

								<div className="form-group">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="invalidCheck3"
											required
											onChange={e =>
												(user.addressBool =
													e.target.value)
											}
										/>
										<label
											className="form-check-label"
											htmlFor="invalidCheck3">
											Shipping address is the same as my
											billing address.
										</label>
									</div>
								</div>

								<hr className="my-4" />

								<button
									className="btn btn-primary col-md-12 mb-3 mt-4"
									type="submit"
									onClick={event => {
										this.setState({ user });
										if (this.handleRequest(event)) {
											// if (actions.isLegalUser(user)) {
											// 	this.props.history.push(
											// 		"/userinfo/"
											// 	);
											// }
										}
									}}>
									Create Account
								</button>
							</form>
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