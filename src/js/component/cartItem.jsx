import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

class CartItem extends Component {
	render() {
		var cartItem = this.props.item;

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<div className="row">
								<img className="col-2" src={cartItem.image} />
								<div className="col-6">
									<h2>{cartItem.name}</h2>
									<h3>{cartItem.price}</h3>
								</div>
								<div className="col-1">
									<h3>{cartItem.price}</h3>
								</div>
								<div className="col-1">
									<h3>{cartItem.quantity}</h3>
								</div>
								<button className="col-2">
									<p>remove item(s)</p>
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

CartItem.propTypes = {
	item: PropTypes.object
};

export default CartItem;
