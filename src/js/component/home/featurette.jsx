import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Featurette(props) {
	// render() {
	var featuredItem = props.item;
	return (
		<div className="card flex-md-row mb-4 box-shadow h-md-250">
			<div className="card-body d-flex flex-column align-items-start">
				<strong className="d-inline-block mb-2 text-primary">
					Featured {featuredItem.category}
				</strong>
				<h3 className="mb-0">
					<a className="text-dark" href="#">
						{featuredItem.title}
					</a>
				</h3>
				<div className="mb-1 text-muted">{featuredItem.date}</div>
				<p className="card-text mb-auto"> {featuredItem.description}</p>
				<Link to={featuredItem.category + "s"}>Continue reading</Link>
			</div>
			<div>
				<img
					className="card-img-right flex-auto d-none d-md-block"
					// style={{ width: 18 + "em", height: 14 + "em" }}
					style={{
						display: "block",
						maxWidth: 15 + "em",
						// width: 15 + "em",
						maxHeight: 18 + "em",
						width: "auto",
						height: "auto",
						overflow: "hidden"
					}}
					src={
						"http://127.0.0.1:8000/api/medias/" + featuredItem.image
					}
					alt="Card image cap"
				/>
			</div>
		</div>
	);
	// }
}
Featurette.propTypes = {
	item: PropTypes.object
	// 	isReverse: PropTypes.bool,
};

export default Featurette;
