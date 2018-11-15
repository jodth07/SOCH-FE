import React, { Component } from "react";

//create your first component
export default class ArtistPage extends Component {
	render() {
		return (
			<div className="text-center mt-1">
				<div
					className="jumbotron jumbotron-fluid shorten"
					style={{ backgroundColor: "blue" }}>
					<div className="container">
						<h4 className="float-right" style={{ color: "white" }}>
							I am a skilled stylist who specializes in wavy and
							curly natural hair.
						</h4>
						<h2 className="display-4 left">
							<img
								src="https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
								width="350"
								height="250"
								className="rounded-circle"
							/>
						</h2>
						<p className="lead artist_name">Janet Jones</p>
					</div>
				</div>
				<div>
					<div className="artistServices">
						<h1> My Services </h1>
						<ul className="list-group">
							<li className="list-group-item">
								Brazilian Keratin Treatment
							</li>
							<li className="list-group-item">
								Wash and Silk press
							</li>
							<li className="list-group-item">
								Single Plat braids
							</li>
							<li className="list-group-item">Formal Updo</li>
							<li className="list-group-item">Beach waves</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
