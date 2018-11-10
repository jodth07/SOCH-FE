import React from "react";
import getState from "./store.js";
import { getProducts, getStyles } from "./getters.jsx";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			getProducts(this);
			getStyles(this);
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}

	return StoreWrapper;
};

export default Store;
