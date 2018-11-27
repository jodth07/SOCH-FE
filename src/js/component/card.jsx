import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

class Card extends Component {
	render() {
		var cardItem = this.props.item;

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="card p-3">
							<img
								className="card-img-top"
								src={
									"http://127.0.0.1:8000/api/medias/" +
									cardItem.image
								}
								alt="Card image cap"
							/>
							<blockquote className="blockquote mb-0 card-body">
								<h5 className="card-title">{cardItem.title}</h5>
								<p>{cardItem.description}</p>
								<footer className="blockquote-footer">
									<small className="text-muted">
										<button
											onClick={() => {
												this.props.viewItem(
													cardItem.id
												);
												actions.upStage(cardItem);
											}}>
											see more details
										</button>
									</small>
								</footer>
							</blockquote>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Card.propTypes = {
	item: PropTypes.object,
	viewItem: PropTypes.func,

	match: PropTypes.object,
	history: PropTypes.object,
	cardItem: PropTypes.object
};

export default Card;
