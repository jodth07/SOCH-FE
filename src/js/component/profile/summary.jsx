import React, { Component } from "react";
import { Context } from "../../store/appContext.jsx";
import QuantityOfItems from "../quantityofitems.jsx";
import Coupon from "../coupon.jsx";
import PaypalButton from "../paypal/payment.jsx";

const CLIENT = {
	sandbox:
		"AXU1a6Iesx_UPO_KY3sOaURz5vl0Q4RZMPzGT0fapTLmCICV_GSXZtGOFwV2sIN9_HXRiCeOoEZPyeWi",
	production: process.env.PAYPAL_CLIENT_ID_PRODUCTION
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

class Summary extends Component {
	render() {
		// const onSuccess = payment =>
		// 	console.log("Successful payment!", payment);

		// const onError = error =>
		// 	console.log("Erroneous payment OR failed to load script!", error);

		// const onCancel = data => console.log("Cancelled payment!", data);
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					const onSuccess = payment => {
						console.log("Successful payment!", payment);
						let cart = {};
						cart.payment_token = payment.paymentToken;
						cart.payment_id = payment.paymentID;
						cart.payer_id = payment.payerID;
						cart.purchased = payment.paid;
						actions.updatePurchaseCart(cart);
					};

					const onError = error =>
						console.log(
							"Erroneous payment OR failed to load script!",
							error
						);

					const onCancel = data =>
						console.log("Cancelled payment!", data);

					let number = store.session.cart_items.length;
					return (
						<div>
							<QuantityOfItems number={number} />
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
										${" "}
										{number === 0
											? "0.00"
											: store.session.cart.subtotal}
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
										${" "}
										{number === 0
											? "0.00"
											: store.session.cart.tax_total}
									</p>
									<p>Tax</p>
								</div>

								<div>
									<div
										style={{
											float: "right",
											opacity: "0.7"
										}}>
										<br />${" "}
										{number === 0
											? "0.00"
											: store.session.cart.total}
									</div>
									<h5 style={{}}>
										<br />
										Total (USD)
									</h5>
								</div>
							</div>
							<Coupon />
							<PaypalButton
								client={CLIENT}
								env={ENV}
								commit={true}
								currency={"USD"}
								total={Number(store.session.cart.total)}
								onSuccess={onSuccess}
								onError={onError}
								onCancel={onCancel}
							/>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default Summary;
