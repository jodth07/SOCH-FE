import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import CartItem from "../cartItem.jsx";

export class Cart extends Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						var cart_items = store.session.cart_items;
						var empty = <p>Your Cart is currently empty</p>;

						return (
							<div className="">
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<div className="row">
											<div className="col-3">One</div>
											<div className="col-3">One</div>
											<div className="col-3">One</div>
											<div className="col-3">One</div>
										</div>
									</li>

									{store.session.cart.products ? (
										cart_items.length === 0 ? (
											empty
										) : (
											<div>
												{cart_items.map(
													(cart_item, index) => {
														return (
															<CartItem
																key={index}
																item={cart_item}
															/>
														);
													}
												)}
											</div>
										)
									) : (
										empty
									)}
								</ul>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
