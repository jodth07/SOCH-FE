import getUserCartItems from "./getters.jsx";

export function createUserCartItems(scope, cart) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch("http://127.0.0.1:8000/api/carts/i/", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			body: JSON.stringify({
				cart: cart
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(response => {
				if (response.ok) {
					getUserCartItems(scope);
				}
			});
	}
}
