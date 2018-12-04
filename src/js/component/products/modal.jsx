import React from "react";
import PropTypes from "prop-types";

import { Context } from "../../store/appContext.jsx";

class Modal extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var c_item = store.session.stagedItem;
					var new_cart = {};
					new_cart.cart = store.session.cart.id;
					new_cart.product = c_item.id;
					new_cart.quantity = 1;

					return (
						<div
							className="modal"
							tabIndex="-1"
							role="dialog"
							style={{
								display: this.props.show
									? "inline-block"
									: "none"
							}}>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">
											{c_item.title}
										</h5>
										{this.props.onClose ? (
											<button
												onClick={() =>
													this.props.onClose()
												}
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">
													&times;
												</span>
											</button>
										) : (
											""
										)}
									</div>
									<div className="modal-body">
										<div>
											<img
												className="card-img-top pb-3 rounded mx-auto d-block"
												src={
													"http://127.0.0.1:8000/api/medias/" +
													c_item.image
												}
												style={{
													display: "block",
													maxWidth: 15 + "em",
													maxHeight: 18 + "em",
													width: "auto",
													height: "auto"
												}}
												alt="Card image cap"
											/>
										</div>
										<p>{c_item.description}</p>
										{c_item.company && (
											<p> by : {c_item.company}</p>
										)}
										<div className="row container justify-content-between">
											<p>Price : ${c_item.price}</p>
											<p className="pull-right">
												Quantity :{" "}
												<input
													onChange={e => {
														new_cart.quantity =
															e.target.value;
													}}
													placeholder="1"
												/>
											</p>
										</div>
									</div>
									<div className="modal-footer justify-content-between">
										<button
											type="button"
											className="btn btn-secondary"
											onClick={() => {
												this.props.onClose();
												actions.unStage();
											}}>
											close
										</button>
										<button
											type="button"
											className="btn btn-primary"
											data-dismiss="modal"
											onClick={() => {
												new_cart.quantity > 0 &&
													actions.addToCart(new_cart);

												this.props.onClose();
												actions.unStage();
											}}>
											Add to Cart
										</button>
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

Modal.propTypes = {
	item: PropTypes.object,
	onClose: PropTypes.func,
	// onDelete: PropTypes.func,
	show: PropTypes.bool
};

Modal.defaultProps = {
	show: false
	// onClose: null
};

export default Modal;
