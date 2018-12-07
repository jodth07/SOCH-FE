// products.cards

// Global Imports
import React, { Component } from "react";
import PropTypes from "prop-types";

// Local Imports
import { Context } from "../../store/appContext.jsx";

class Card extends Component {
	render() {
		var card_item = this.props.item;
		var link = "http://127.0.0.1:8000/api/medias/" + card_item.image;

		return (
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div
							className="card pt-2 rounded-5"
							onClick={() => {
								this.props.viewItem(card_item.id);
								actions.upStage(card_item);
							}}>
							<img
								className="card-img-top rounded mx-auto d-block"
								src={card_item ? link : ""}
								style={{
									display: "block",
									maxWidth: 12 + "em",
									maxHeight: 16 + "em",
									width: "auto",
									height: "auto"
								}}
								alt="Card image cap"
							/>
							<blockquote className="blockquote align-center card-body">
								<h5 className="card-title">
									{card_item.title}
								</h5>
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
	viewItem: PropTypes.func
};

export default Card;
