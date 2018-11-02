import React, { Component } from "react";

export class Card extends Component {
	render() {
		return (
			<div className="card p-3">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<blockquote className="blockquote mb-0 card-body">
					<h5 className="card-title">Card title</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer posuere erat a ante.
					</p>
					<footer className="blockquote-footer">
						<small className="text-muted">
							Someone famous in{" "}
							<cite title="Source Title">Source Title</cite>
						</small>
					</footer>
				</blockquote>
			</div>
		);
	}
}
