import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";

export class AddressAddUpdate extends Component {
	render() {
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
		var user = {};
		var address_type = this.props.address_type;

		var cardItem = this.props.item;
		var showComp = {
			display: this.props.show
		};
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div id="ship-address" style={showComp}>
							<div className="form-row">
								<div className="col-md-12 mb-3">
									<label htmlFor="ship-address">
										{address_type}
									</label>

									<input
										type="text"
										className="form-control"
										placeholder="Street Address"
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
										placeholder="City"
										required
										onChange={e =>
											(user.city = e.target.value)
										}
									/>
								</div>

								<div className="col-md-3 mb-3">
									<label htmlFor="State">State</label>
									<select
										onChange={e =>
											(user.state = e.target.value)
										}
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
									<label htmlFor="Postal-Code">
										Zip Code
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Zip Code"
										required
										onChange={e =>
											(user.zipCode = e.target.value)
										}
									/>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

AddressAddUpdate.propTypes = {
	item: PropTypes.object,
	viewItem: PropTypes.func,
	address_type: PropTypes.string,
	show: PropTypes.string,

	match: PropTypes.object,
	history: PropTypes.object,
	cardItem: PropTypes.object
};

export class AddressView extends Component {
	render() {
		var address = this.props.address;
		return (
			<div>
				<p>
					<strong>{address.a_type} Address</strong>
				</p>
				<p>{address.street}</p>
				<p>
					{address.city}, {address.state}, {address.zipcode}
				</p>
				<p>{address.country}</p>
			</div>
		);
	}
}

AddressView.propTypes = {
	address: PropTypes.object
};
