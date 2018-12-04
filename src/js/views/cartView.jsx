import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";

import { Cart } from "../component/profile/cart.jsx";
import Summary from "../component/profile/summary.jsx";

class CartView extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="container">
								<div className="row mt-3">
									<div className="col-12 d-flex justify-content-center mx-auto">
										<div className="col-7 mt-3">
											<Cart />
										</div>
										<Summary />
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default CartView;
