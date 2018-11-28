import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
	render() {
		var cartItem = this.props.item;

		return (
			<div className="row">
				<img
					className="col-2"
					// src={cartItem.image}
					style={{
						width: 12 + "em",
						height: 6 + "em"
					}}
				/>
				<div className="col-6">
					{/* <h2>{cartItem.name}</h2> */}
					{/* <h3>{cartItem.price}</h3> */}
				</div>
				<div className="col-1">{/* <h3>{cartItem.price}</h3> */}</div>
				<div className="col-1">
					<input placeholder={cartItem.quantity} />
				</div>
				<div className="col-2">
					<button>
					<p>remove item(s)</p>
					</button>
				</div>
			</div>
		);
	}
}

CartItem.propTypes = {
	item: PropTypes.object
};

export default CartItem;
