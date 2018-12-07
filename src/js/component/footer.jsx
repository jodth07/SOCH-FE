import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<footer className="container border-top p-3">
				<div className="row">
					<div className="col-10 text-center">
						©2018 JD, Inc.
						<a href="#ppage">Privacy</a>
						<a href="#termspage">Terms</a>
					</div>
					<div className="col-2">
						<a href="#top">Back to Top</a>
					</div>
				</div>
			</footer>
		);
	}
}
