import React, { Component } from "react";
import Card from "../component/products/card.jsx";
import { Context } from "../store/appContext.jsx";
import Modal from "../component/products/modal.jsx";

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
									return (
										<div key={index}>
											<Card
												item={product}
												viewItem={() =>
													this.setState({
														showModal: true,
														key: product.id
													})
												}
											/>
										</div>
									);
								})}
							</div>
						);
					}}
				</Context.Consumer>
				<Modal
					show={this.state.showModal}
					onClose={() =>
						this.setState({
							showModal: false
						})
					}
				/>
			</div>
		);
	}
}
