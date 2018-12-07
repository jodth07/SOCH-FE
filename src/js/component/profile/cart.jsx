import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import CartItem from "./cartItem.jsx";

export class Cart extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var cart_items = store.session.cart_items;
					var empty = <p>Your Cart is currently empty</p>;

					return (
						<ul className="list-group list-group-flush">
							{cart_items.length === 0 ? (
								empty
							) : (
								<div>
									{cart_items.map((cart_item, index) => {
										return (
											<CartItem
												key={index}
												item={cart_item}
											/>
										);
									})}
								</div>
							)}
						</ul>
					);
				}}
			</Context.Consumer>
		);
	}
}
