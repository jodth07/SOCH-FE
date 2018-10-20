import React, { Component } from "react";

import { Context } from "../store/appContext.jsx";
import MyCaroursel from "../component/home/carousel.jsx";
import { Card } from "../component/home/card.jsx";
import { Featurette } from "../component/home/featurette.jsx";

class LandingPage extends Component {
	render() {
		return (
			<div className="">
				<main role="main mt-4" style={{ backgroundColor: "white" }}>
					<div className="container">
						<div>
							<Context.Consumer>
								{({ store }) => {
									return (
										<MyCaroursel
											items={store.items_1.map(
												(item, index) => {
													return item;
												}
											)}
										/>
									);
								}}
							</Context.Consumer>
						</div>
					</div>

					<div className="container mt-4">
						{/* <div className="col-md-6"> */}
						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									World
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										Featured post
									</a>
								</h3>
								<div className="mb-1 text-muted">Nov 12</div>
								<p className="card-text mb-auto">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content.
								</p>
								<a href="#">Continue reading</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block"
								data-src="holder.js/200x250?theme=thumb"
								alt="Card image cap"
							/>
							{/* </div> */}
						</div>

						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-primary">
									World
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										Featured post
									</a>
								</h3>
								<div className="mb-1 text-muted">Nov 12</div>
								<p className="card-text mb-auto">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content.
								</p>
								<a href="#">Continue reading</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block"
								data-src="holder.js/200x250?theme=thumb"
								alt="Card image cap"
							/>
							{/* </div> */}
						</div>

						<div className="card flex-md-row mb-4 box-shadow h-md-250">
							<div className="card-body d-flex flex-column align-items-start">
								<strong className="d-inline-block mb-2 text-success">
									Design
								</strong>
								<h3 className="mb-0">
									<a className="text-dark" href="#">
										Post title
									</a>
								</h3>
								<div className="mb-1 text-muted">Nov 11</div>
								<p className="card-text mb-auto">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content.
								</p>
								<a href="#">Continue reading</a>
							</div>
							<img
								className="card-img-right flex-auto d-none d-md-block"
								data-src="holder.js/200x250?theme=thumb"
								alt="Card image cap"
							/>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default LandingPage;
