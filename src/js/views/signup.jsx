import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			session: false,
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				address: "",
				city: "",
				zipcode: null
			}
		};
		this.getUser = this.getUser.bind(this);
	}

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
		var USstates = [
			"AK",
			"AL",
			"AR",
			"AZ",
			"CA",
			"CO",
			"CT",
			"DE",
			"FL",
			"GA",
			"HI",
			"IA",
			"ID",
			"IL",
			"IN",
			"KS",
			"KY",
			"LA",
			"MA",
			"MD",
			"ME",
			"MI",
			"MN",
			"MO",
			"MS",
			"MT",
			"NC",
			"ND",
			"NE",
			"NH",
			"NJ",
			"NM",
			"NV",
			"NY",
			"OH",
			"OK",
			"OR",
			"PA",
			"RI",
			"SC",
			"SD",
			"TN",
			"TX",
			"UT",
			"VA",
			"VT",
			"WA",
			"WI",
			"WV",
			"WY"
		];
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
											{USstates.map((state, index) => {
												return (
													<option key={index}>
														{state}
													</option>
												);
											})}
										</select>
									</div>

									<div className="col-md-3 mb-3">
										<label htmlFor="validationServer05">
											Zip Code
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
											// required
											// onChange={e =>
											// 	(user.addressBool =
											// 		e.target.value)
											// }
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
											actions.createUser(user);
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
