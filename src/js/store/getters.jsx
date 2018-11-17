const token = "";

const HEADER = {
	headers: new Headers({
		Authorization: "JWT " + token,
		"Content-Type": "application/json"
	})
};

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

export function getCategories(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/categories/")
		.then(response => response.json())
		.then(data => {
			store.categories = data;
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
	getCategories(scope);
	getProducts(scope);
	getStyles(scope);
}

export function getAuthkey(scope, uname, pass) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/login/", {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		body: JSON.stringify({
			username: uname,
			password: pass
		}), // data can be `string` or {object}!
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response => response.json())
		.then(data => {
			store.session.token = data;
			console.log(data["token"]);
			scope.setState({ store });
		});
}
