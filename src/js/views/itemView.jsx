import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

//create your first component
class ItemView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: {}
		};
	}

	render() {
		return (
			<div>
				<h2>Here will be the Item Views</h2>
			</div>
		);
	}
}

ItemView.propTypes = {};

//create your first component
export default ItemView;
