import React, { Component } from "react";

//create your first component
export default class ArtistPage extends Component {
	render() {
		return (
			<div className="text-center mt-1">
				<div
					className="jumbotron jumbotron-fluid shorten"
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/1029894/pexels-photo-1029894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500')"
					}}>
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
				<div className="photoSample">
					<div className="rowA">
						<div className="column col-4" id="one">
							<img src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" />
						</div>
						<div className="column col-4" id="one">
							<img src="https://images.pexels.com/photos/935952/pexels-photo-935952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" />
						</div>
						<div className="column col-4" id="one">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WJmmR4xxFJ5cY7lh-23mL7jlnIz3V9aYDpo7lZlATenA2dgtjg" />
						</div>

						<div className="column col-4">
							<img src="https://images.pexels.com/photos/713527/pexels-photo-713527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" />
						</div>
						<div className="column col-4">
							<img src="https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" />
						</div>
						<div className="column col-4">
							<img src="https://images.pexels.com/photos/157920/woman-face-curly-hair-157920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150" />
						</div>
					</div>
				</div>
				<div>
					<span className="artistServices">
						<h1 className="specialTitle"> Special Events </h1>
						<ul className="list-group" id="specialE">
							<li className="list-group-item">
								Weddings
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
							<li className="list-group-item">
								Photoshoots
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
							<li className="list-group-item">
								Prom/Homecoming
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
						</ul>
					</span>
					<span className="artistServices">
						<h1 className="specialTitle"> Special Promotions </h1>
						<ul className="list-group" id="specialE">
							<li className="list-group-item">
								$20 off Indian Wavy hair
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
							<li className="list-group-item">
								10% Off Morrocan Oil conditioner
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
							<li className="list-group-item">
								Free Blowdry with Purchase of Shampoo
								<button
									type="button"
									className="btn btn-dark"
									id="aButton">
									Buy
								</button>
							</li>
						</ul>
					</span>
				</div>
			</div>
		);
	}
}
