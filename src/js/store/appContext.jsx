import React from "react";
import getState from "./store.js";
import loadGetters from "./getters.jsx";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState(this);
		}

		componentDidMount() {
			loadGetters(this);
			// if (this.state.session.logged_in) {
			// 	let store = this.state.store;
			// 	fetch("http://localhost:8000/api/current_user/", {
			// 		headers: {
			// 			Authorization: `JWT ${this.state.session.getItem(
			// 				"token"
			// 			)}`
			// 		}
			// 	})
			// 		.then(res => res.json())
			// 		.then(json => {
			// 			store.session.username = json.username;
			// 			this.setState({ store });
			// 		});
			// }
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
