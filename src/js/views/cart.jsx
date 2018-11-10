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
					return store.session.cart.length <= 0 ? (
						<div className="row container">
							<div className="card p-3 col-8">
								<h2>Your current cart is Empty</h2>
							</div>
							<div className="col-4">
								<h2>calculations</h2>
							</div>
						</div>
					) : (
						<div className="row container">
							<div className="card col-9 p-3">
								{store.session.cart.map((item, index) => {
									return <CartItem key={index} item={item} />;
								})}
							</div>
							<div className="col-3">
								<h2>calculations</h2>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default Cart;
