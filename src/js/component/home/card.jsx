import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card(props) {
	return (
		<div className="col-lg-4">
			<img
				className="rounded-circle"
				src={props.thumbnail}
				alt=""
				width="140px"
				height="140px"
			/>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<Link to={props.link}>
				{" "}
				<button className="btn btn-secondary">View Details</button>
			</Link>
		</div>
	);
}
Card.propTypes = {
	thumbnail: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
	link: PropTypes.string
};

export default Card;
