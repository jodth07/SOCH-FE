import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";

class Card extends Component {
	render() {
		var cardItem = this.props.item;

		return (
			<Context.Consumer>
				{({ actions }) => {
					return (
						<div
							className="card pt-2 rounded-5"
							onClick={() => {
								this.props.viewItem(cardItem.id);
								actions.upStage(cardItem);
							}}>
							<img
								className="card-img-top rounded mx-auto d-block"
								src={
									"http://127.0.0.1:8000/api/medias/" +
									cardItem.image
								}
								style={{
									// 	width: 10 + "em",
									// 	height: 14 + "em"
									display: "block",
									maxWidth: 12 + "em",
									maxHeight: 16 + "em",
									width: "auto",
									height: "auto"
								}}
								alt="Card image cap"
							/>
							<blockquote className="blockquote align-center card-body">
								<h5 className="card-title">{cardItem.title}</h5>
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
