import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import CartItem from "../cartItem.jsx";

export class Cart extends Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						var cart = store.session.cart;
						var empty = <p>Your Cart is currently empty</p>;
						var not_empty = <p>Your Cart is not currently empty</p>;

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

									{cart.products ? (
										cart.products.length === 0 ? (
											empty
										) : (
											<div>
												{cart.products.map(
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
