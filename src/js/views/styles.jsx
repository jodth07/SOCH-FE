import React, { Component } from "react";

import Card from "../component/products/card.jsx";
import { Context } from "../store/appContext.jsx";
import Modal from "../component/products/modal.jsx";

//create your first component
export default class Styles extends Component {
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
					{({ store }) => {
						return (
							<div>
								{store.styles.map((style, index) => {
									return (
										<Card
											key={index}
											item={style}
											viewItem={() =>
												this.setState({
													showModal: true,
													key: style.id
												})
											}
										/>
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
