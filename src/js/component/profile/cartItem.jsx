import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.jsx";

class CartItem extends Component {
	render() {
		var cart_item = this.props.item;
		var link = "http://127.0.0.1:8000/api/medias/";
		return (
			<Context.Consumer>
				{({ actions }) => {
					return (
						<li className="list-group-item row">
							<div className="row">
								<img
									className="col-2"
									src={link + cart_item.product.image}
									style={{
										width: 10 + "em",
										height: 5 + "em"
									}}
								/>
								<div className="col-5">
									<p>{cart_item.product.title}</p>
									<p className="row container justify-content-between">
										${cart_item.product.price}
										<button className="btn  pull-right">
											Update quantity
										</button>
									</p>
								</div>

								<input
									className="col-1"
									placeholder={cart_item.quantity}
								/>

								<div className="col-1" />
								<div className="col-1">
									<p>{cart_item.subtotal}</p>
									<button
										className="btn  pull-right"
										onClick={() => {
											actions.removeFromCart(
												cart_item.id
											);
										}}>
										Remove items
									</button>
								</div>
							</div>
						</li>
					);
				}}
			</Context.Consumer>
		);
	}
}

CartItem.propTypes = {
	item: PropTypes.object
};

export default CartItem;
