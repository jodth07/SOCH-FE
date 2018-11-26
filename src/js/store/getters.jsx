export function getUserData(scope) {
	let store = scope.state.store;
	console.log(store.session.token);
	if (store.session.logged_in) {
		// console.log(store.session.token);
		fetch("http://127.0.0.1:8000/api/users/reup/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Birdy " + store.session.token
			}
		})
			.then(response => response.json())
			.then(data => {
				store.session.user = data;
				// store.session.cart = data["cart"];
				// store.session.purchased = data["purchased"];
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
		});
	getUserData(scope);
}

export function getProducts(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/products/")
		.then(response => response.json())
		.then(data => {
			store.products = data;
			scope.setState({ store });
		});
}

export function getStyles(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/styles/")
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
	// getFeatured(scope);
	// getProducts(scope);
	// getStyles(scope);
}
