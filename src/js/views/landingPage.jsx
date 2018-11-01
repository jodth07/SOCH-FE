import React, { Component } from "react";

import { Context } from "../store/appContext.jsx";
import MyCaroursel from "../component/home/carousel.jsx";
import { Featurette } from "../component/home/featurette.jsx";

import slide12 from "../../img/slide_12.jpg";
var artist = {
	type: "Artist",
	name: "Mary Leytie",
	date: "Nov, 2018",
	description:
		"JavaScript, however, understands the date based on a timestamp derived from Unix time, which is a value consisting of the number of milliseco",
	link: "artists",
	img: slide12
};

class LandingPage extends Component {
	render() {
		return (
			<div className="">
				<main role="main mt-4" style={{ backgroundColor: "white" }}>
					<Context.Consumer>
						{({ store }) => {
							return (
								<div>
									<div className="container">
										<MyCaroursel items={store.items_1} />
									</div>

									<div className="container mt-4">
										{store.featured.map((item, index) => {
											return (
												<Featurette
													key={index}
													item={item}
												/>
											);
										})}
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</main>
			</div>
		);
	}
}

export default LandingPage;
