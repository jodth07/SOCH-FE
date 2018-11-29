export function getUserData(scope) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch("http://127.0.0.1:8000/api/users/reup/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Birdy " + store.session.token
			}
		})
			.then(response => response.json())
			.then(data => {
				store.session.user = data;
				scope.setState({ store });
				getUserAddress(scope);
				getUserCart(scope);
			});
	}
}

export function getUserAddress(scope) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch(
			"http://127.0.0.1:8000/api/users/address/" + store.session.user.id
			// {
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		Authorization: "Birdy " + store.session.token
			// 	}
			// }
		)
			.then(response => response.json())
			.then(data => {
				store.session.address = data;
				scope.setState({ store });
			});
	}
}

export function getUserCart(scope) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch("http://127.0.0.1:8000/api/carts/c/" + store.session.user.id)
			.then(response => response.json())
			.catch(response => {
				if (!response.ok) {
					createUserCart(scope);
				}
			})
			.then(data => {
				store.session.cart = data;
				scope.setState({ store });
				getUserCartItems(scope);
			});
	}
}

export function getUserCartItems(scope) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch("http://127.0.0.1:8000/api/carts/i/" + store.session.cart.id)
			.then(response => response.json())
			.then(data => {
				store.session.cart_items = data;
				scope.setState({ store });
			});
	}
}

export function createUserCart(scope) {
	let store = scope.state.store;
	if (store.session.logged_in) {
		fetch("http://127.0.0.1:8000/api/carts/c/", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			body: JSON.stringify({
				user: store.session.user.id
			}), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => {
				store.session.cart = data;
				scope.setState({ store });
			});
	}
}

export function getAuthkey(scope, email, pass) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/users/login/", {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		body: JSON.stringify({
			email: email,
			password: pass
		}), // data can be `string` or {object}!
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(data => {
			store.session.token = data["token"];
			store.session.logged_in = true;
			scope.setState({ store });
			getUserData(scope);
		});
}

export function getProducts(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/products/p/")
		.then(response => response.json())
		.then(data => {
			store.products = data;
			scope.setState({ store });
		});
}

export function getStyles(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/products/s/")
		.then(response => response.json())
		.then(data => {
			store.styles = data;
			scope.setState({ store });
		});
}

export function getFeatured(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/featurette/")
		.then(response => response.json())
		.then(data => {
			store.featured = data;
			scope.setState({ store });
		});
}

export default function loadGetters(scope) {
	getFeatured(scope);
	getProducts(scope);
	getStyles(scope);
}
