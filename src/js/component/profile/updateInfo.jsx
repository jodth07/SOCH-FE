import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import AddressAddUpdate from "./address.jsx";

class UpdateInfo extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: ""
			},
			show: "block"
		};
	}

	addShipping(event) {
		let show = this.state.show;
		if (show === "block") {
			show = "none";
		} else {
			show = "block";
		}
		this.setState({ show });
	}

	render() {
		var user = this.state.user;
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						var user = store.session.user;
						return (
							<form role="form">
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
											placeholder={user.first_name}
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
											placeholder={user.last_name}
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
												placeholder={user.email}
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
								<div id="shipshow">
									<AddressAddUpdate address_type="Shipping Address" />

									<hr className="my-4" />
								</div>
								<div className="form-group">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id="invalidCheck3"
											onClick={() => this.addShipping()}
										/>
										<label
											className="form-check-label"
											htmlFor="invalidCheck3">
											Billing address is the same as my
											Shipping address.
										</label>
									</div>
								</div>

								<hr className="my-4" />

								<AddressAddUpdate
									address="Billing Address"
									show={this.state.show}
								/>

								<button
									className="btn btn-primary col-md-12 mb-3 mt-4"
									type="submit"
									onClick={event => {
										this.setState({ user });
										if (this.handleRequest(event)) {
											actions.updateUser(user);
										}
									}}>
									Update Account Info
								</button>
							</form>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}

AddressAddUpdate.propTypes = {
	item: PropTypes.object,
	viewItem: PropTypes.func,
	address: PropTypes.string,
	show: PropTypes.string,

	match: PropTypes.object,
	history: PropTypes.object,
	cardItem: PropTypes.object
};

export default UpdateInfo;
