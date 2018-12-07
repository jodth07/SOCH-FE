import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import CartItem from "./cartItem.jsx";

export class History extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var history = store.session.history;
					var empty = <h5>Your Purchase History is currently empty</h5>;

					return (
						<ul className="list-group list-group-flush">
							{history.length === 0 ? (
								empty
							) : (
								<div>
									{history.map((cart, index) => {
										return (
											// <Cart
											// 	key={index}
											// 	item={cart}
                                            // />
                                            <p>Hi</p>
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
