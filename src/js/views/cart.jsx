import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import CartItem from "../component/cartItem.jsx";

class Cart extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.session.cart.length <= 0) {
						return (
							<div className="card p-3">
								<h2>Your current cart is Empty</h2>
							</div>
						);
					} else {
						return (
							<div className="card p-3">
								{store.session.cart.map((item, index) => {
									return <CartItem key={index} item={item} />;
								})}
							</div>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}

export default Cart;
