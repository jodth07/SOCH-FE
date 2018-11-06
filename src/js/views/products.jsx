import React, { Component } from "react";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.jsx";

//create your first component
export default class Products extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			key: "",
			item: {}
		};
	}
	render() {
		return (
			<div className="card-columns container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								{store.products.map((product, index) => {
									return <Card key={index} item={product} />;
								})}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
