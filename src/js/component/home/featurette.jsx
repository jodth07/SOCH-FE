import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Featurette(props) {
	// render() {
	var featuredItem = props;
	return (
		<div className="card flex-md-row mb-4 box-shadow h-md-250">
			<div className="card-body d-flex flex-column align-items-start">
				<strong className="d-inline-block mb-2 text-primary">
					Featured {props.item.type}
				</strong>
				<h3 className="mb-0">
					<a className="text-dark" href="#">
						{props.item.name}
					</a>
				</h3>
				<div className="mb-1 text-muted">{props.item.date}</div>
				<p className="card-text mb-auto">q {props.item.description}</p>
				<Link to={props.item.link}>Continue reading</Link>
			</div>
			<img
				className="card-img-right flex-auto d-none d-md-block"
				data-src={props.item.img}
				alt="Card image cap"
			/>
			{/* </div> */}
		</div>
	);
	// }
}
Featurette.propTypes = {
	item: PropTypes.object
	// 	isReverse: PropTypes.bool,
	// 	product: PropTypes.object.isRequired,
	// 	button: PropTypes.element.isRequired
};

export default Featurette;
