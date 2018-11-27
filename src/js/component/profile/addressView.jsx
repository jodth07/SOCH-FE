import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class AddressView extends Component {
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

export default AddressView;
