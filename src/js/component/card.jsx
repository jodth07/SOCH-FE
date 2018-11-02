import React, { Component } from "react";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var cardItem = this.props.item;
		return (
			<div className="card p-3">
				<img
					className="card-img-top"
					src={cardItem.image}
					alt="Card image cap"
				/>
				<blockquote className="blockquote mb-0 card-body">
					<h5 className="card-title">{cardItem.title}</h5>
					<p>{cardItem.description}</p>
					<footer className="blockquote-footer">
						<small className="text-muted">
							<Link to={cardItem.link}>Someone famous in </Link>
						</small>
					</footer>
				</blockquote>
			</div>
		);
	}
}
Card.propTypes = {
	item: PropTypes.object
};
