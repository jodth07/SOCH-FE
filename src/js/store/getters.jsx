export function getProducts(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/products/")
		.then(response => response.json())
		.then(data => {
			store.products = data;
			scope.setState({ store });
		});
	// .catch(error => console.log(error));
}

export function getStyles(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/styles/")
		.then(response => response.json())
		.then(data => {
			store.styles = data;
			scope.setState({ store });
		});
	// .catch(error => console.log(error));
}

export function getCategories(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/categories/")
		.then(response => response.json())
		.then(data => {
			store.categories = data;
			// console.log(data);
			scope.setState({ store });
		});
	// .catch(error => console.log(error));
}

export function getFeatured(scope) {
	let store = scope.state.store;
	fetch("http://127.0.0.1:8000/api/featurette/")
		.then(response => response.json())
		.then(data => {
			store.featured = data;
			// console.log(data);
			scope.setState({ store });
		});
}

export default function loadGetters(scope) {
	getFeatured(scope);
	getCategories(scope);
	getProducts(scope);
	getStyles(scope);
}
