import React from "react";
import { Context } from "../store/appContext.jsx";
function Total() {
	return (
		<Context.Consumer>
			{({ store }) => {
				let total = 0;
				store.cart.forEach((item, index) => {
					total = total + item.price;
				});

				return (
					<div>
						<div style={{ float: "right", opacity: "0.7" }}>
							<br />
							{"$" + (total - 10)}
						</div>
						<h5 style={{}}>
							<br />
							Total (USD)
						</h5>
					</div>
				);
			}}
		</Context.Consumer>
	);
}
export default Total;
