import React from "react";

import PropTypes from "prop-types";

function Item(props) {
	return (
		<div style={{ borderBottom: "1px solid #acadaf" }}>
			<div style={{ float: "right", fontSize: "15px" }}>
				<strong>${props.price}</strong>
			</div>
			<h5>{props.name}</h5>

			<p style={{ opacity: "0.7" }}>{props.description}</p>
		</div>
	);
}

Item.propTypes = {
	price: PropTypes.number,
	name: PropTypes.string,
	description: PropTypes.string
};

export default Item;
