import React, { Component } from "react";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.jsx";

//create your first component
export default class Styles extends Component {
	render() {
		return (
			<div className="card-columns container">
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								{store.styles.map((style, index) => {
									return <Card key={index} item={style} />;
								})}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
