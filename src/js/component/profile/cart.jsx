import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";

export class Cart extends Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						var cart = store.session.cart;
						var empty = <p>Your Cart is currently empty</p>;
						var not_empty = <p>Your Cart is not currently empty</p>;
						var cart_items = cart.products ? (
							<div>
								{cart.products.map((cart_item, index) => {
									return <h2 key={index}>{cart_item}</h2>;
								})}
							</div>
						) : (
							empty
						);
						return (
							<div className="container">
								<p>Here will go cart info from store</p>
								The cart id is : {cart.id}
								{cart.products && cart.products.length === 0
									? empty
									: cart_items}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
