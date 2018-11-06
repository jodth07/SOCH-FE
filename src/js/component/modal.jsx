import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

class Modal extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var c_item = store.session.stagedItem;
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
										<p>{c_item.description}</p>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											onClick={() =>
												this.props.onClose()
											}>
											close
										</button>
										<button
											type="button"
											className="btn btn-primary"
											data-dismiss="modal"
											onClick={() => {
												actions.unStage();
												this.props.onClose();
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
/**
 * here is where you define the data-types for
 * your component propersties
 **/
Modal.propTypes = {
	item: PropTypes.object,
	onClose: PropTypes.func,
	// onDelete: PropTypes.func,
	show: PropTypes.bool
};

/**
 * here is where you define the default values for
 * your component propersties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};

export default Modal;
