import React from "react";
import Item from "../component/item.jsx";
import { Context } from "../store/appContext.jsx";

function List() {
	return (
		<Context.Consumer>
			{({ store }) => {
				return store.cart.map((item, index) => {
					return (
						<Item
							key={index}
							name={item.name}
							price={item.price}
							description={item.description}
						/>
					);
				});
			}}
		</Context.Consumer>
	);
}
export default List;
