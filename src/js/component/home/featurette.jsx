import React from "react";
import PropTypes from "prop-types";

export function Featurette(props) {
	return (
		<div className="row featurette">
			<div
				className={
					props.isReverse
						? "col-md-7 order-md-2 my-auto"
						: "col-md-7 my-auto"
				}>
				<h2
					className="featurette-heading"
					style={{ fontWeight: "400", fontSize: "50px" }}>
					{props.product.name}
					<br />
					<span className="text-muted">${props.product.price}</span>
				</h2>
				<p style={{ fontSize: "1.6rem" }}>
					{props.product.description}
				</p>
				{props.button}
			</div>
			<div className="col-md-5">
				<img
					className="featurette-image img-fluid mx-auto"
					data-src="holder.js/500x500/auto"
					alt="500x500"
					style={{ width: "500px", height: "500px" }}
					src={props.product.image}
					data-holder-rendered="true"
				/>
			</div>
		</div>
	);
}
Featurette.propTypes = {
	isReverse: PropTypes.bool,
	product: PropTypes.object.isRequired,
	button: PropTypes.element.isRequired
};

export default Featurette;
