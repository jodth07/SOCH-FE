import React, { Component } from "react";

import { Context } from "../store/appContext.jsx";
import MyCaroursel from "../component/home/carousel.jsx";
import { Featurette } from "../component/home/featurette.jsx";

class Home extends Component {
	render() {
		return (
			<main role="main mt-4">
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								<div className="container">
									<MyCaroursel items={store.carouselItems} />
								</div>
								<div className="container mt-4">
									{Object.values(store.featured).map(
										(item, index) => {
											return (
												<Featurette
													key={index}
													item={item}
												/>
											);
										}
									)}
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</main>
		);
	}
}

export default Home;
