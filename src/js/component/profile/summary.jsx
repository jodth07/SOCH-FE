import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import QuantityOfItems from "../quantityofitems.jsx";
import Coupon from "../coupon.jsx";

class Summary extends Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<QuantityOfItems
								number={store.session.cart_items.length}
							/>
							<h3 style={{ opacity: "0.7" }}>Cart Summary</h3>
							<div
								style={{
									backgroundColor: "white",
									borderRadius: "5px",
									border: "1px solid #acadaf",
									padding: "15px"
								}}>
								<div>
									<div
										style={{
											float: "right",
											opacity: "0.7"
										}}>
										{"$ " + store.session.cart.subtotal}
									</div>
									<p>Total Before Tax</p>
								</div>

								<div
									style={{
										borderBottom: "1px solid #acadaf",
										color: "green"
									}}>
									<p
										style={{
											float: "right",
											opacity: "0.7"
										}}>
										{"$ " + store.session.cart.tax_total}
									</p>
									<p>Tax</p>
								</div>

								<div>
									<div
										style={{
											float: "right",
											opacity: "0.7"
										}}>
										<br />
										{"$ " + store.session.cart.total}
									</div>
									<h5 style={{}}>
										<br />
										Total (USD)
									</h5>
								</div>
							</div>
							<Coupon />
							<button
								className="btn btn-success col-md-12 mb-3 mt-4"
								type="submit">
								Continue to checkout
							</button>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default Summary;
