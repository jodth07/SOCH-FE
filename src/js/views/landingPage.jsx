import React, { Component } from "react";

import { Context } from "../store/appContext.jsx";
import MyCaroursel from "../component/home/carousel.jsx";
import { Card } from "../component/home/card.jsx";
import { Featurette } from "../component/home/featurette.jsx";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<MyCaroursel
								items={store.items_1.map((item, index) => {
									return item;
								})}
							/>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

export default LandingPage;
