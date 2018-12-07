import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";

import {
	getProducts,
	getAuthkey,
	getUserAddress,
	getUserCart,
	getUserCartItems,
	createUserCart,
	getUserData
} from "./getters.jsx";

const getState = scope => {
	return {
		store: {
			carouselItems: [
				{
					src: slide10,
					altText: "Artists",
					title: "artists",
					caption: "Artists"
				},
				{
					src: slide11,
					altText: "Products",
					title: "products",
					caption: "Products"
				},
				{
					src: slide12,
					altText: "Styles",
					title: "Styles",
					caption: "styles"
				}
			],

			products: [], // Recieving from API

			styles: [], // Recieving from API

			stylists: [],

			featured: {}, // Recieving from API

			session: {
				token: "",
				user: {},
				cart: {},
				cart_items: [],
				purchased: {},

				address: [
					{
						Country: "United States",
						a_type: "Shipping",
						city: "Gainesville",
						id: 3,
						state: "FL",
						street: "279 Corry Vlg Apt # 5",
						user: 2,
						zipcode: "32608"
					}
				],
				stagedItem: {},
				logged_in: false
			}
		},
		actions: {
			// local class
			upStage: item => {
				let store = scope.state.store;
				store.session.stagedItem = item;
				scope.setState({ store });
				return true;
			},

			unStage: () => {
				let store = scope.state.store;
				store.session.stagedItem = {};
				scope.setState({ store });
			},

			logout: () => {
				let store = scope.state.store;
				store.session.token = "";
				store.session.logged_in = false;
				scope.setState({ store });
			},

			// Own API Calls

			// Cart Items

			addToCart: cart_item => {
				// Add cart items to cart
				let store = scope.state.store;
				if (store.session.logged_in) {
					fetch("http://127.0.0.1:8000/api/carts/i/", {
						method: "POST", // *GET, POST, PUT, DELETE, etc.
						body: JSON.stringify({
							quantity: cart_item.quantity,
							cart: store.session.cart.id,
							product: cart_item.product
						}),
						headers: {
							"Content-Type": "application/json"
						}
					}).then(response => {
						if (response.ok) {
							scope.state.actions.getUserCart(scope);
						}
					});
				}
			},

			removeFromCart: cart_item_id => {
				// remove cart items from cart
				let store = scope.state.store;
				if (store.session.logged_in) {
					fetch("http://127.0.0.1:8000/api/carts/i/" + cart_item_id, {
						method: "DELETE" // *GET, POST, PUT, DELETE, etc.
					})
						.then(response => {
							response.json();
							if (response.ok) {
								scope.state.actions.getUserCart(scope);
							}
						})
						.catch(error => {
							return;
						});
				}
			},

			updateCartItem: (cart_item_id, quantity) => {
				// update quantity of items in cart item
				let store = scope.state.store;
				if (store.session.logged_in) {
					fetch("http://127.0.0.1:8000/api/carts/i/" + cart_item_id, {
						method: "PUT", // *GET, POST, PUT, DELETE, etc.
						body: JSON.stringify({
							quantity: quantity,
							id: cart_item_id
						})
					}).then(response => {
						response.json();
						if (response.ok) {
							scope.state.actions.getUserCart(scope);
						}
					});
				}
			},

			// carts

			updatePurchaseCart: cart => {
				let store = scope.state.store;
				fetch(
					"http://127.0.0.1:8000/api/carts/c/" +
						store.session.cart.id,
					{
						method: "PUT", // *GET, POST, PUT, DELETE, etc.
						body: JSON.stringify({
							id: store.session.cart.id,
							payer_id: cart.payer_id,
							payment_id: cart.payment_id,
							purchased: cart.purchased,
							payment_token: cart.payment_token
						}), // data can be `string` or {object}!
						headers: {
							"Content-Type": "application/json"
						}
					}
				).then(response => {
					if (response.ok) {
						response.json();
						scope.state.actions.getUserCart(scope);
					}
				});
			},

			getUserCart: scope => {
				let store = scope.state.store;
				if (store.session.logged_in) {
					var url =
						"http://127.0.0.1:8000/api/carts/c/" +
						store.session.user.id;
					fetch(url)
						.then(response => response.json())
						.then(data => {
							store.session.cart = data;
							console.log(data);
							scope.setState({ store });
							getUserCartItems(scope);
						});
				}
			},

			// Additional API calls

			// products
			updateProducts: () => {
				getProducts(scope);
			},

			// Users
			getAuth: user => {
				// getAuthkey(scope, user.email, user.password);
				let store = scope.state.store;
				fetch("http://127.0.0.1:8000/api/users/login/", {
					method: "POST", // *GET, POST, PUT, DELETE, etc.
					body: JSON.stringify({
						email: user.email,
						password: user.password
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
				return true;
			},

			getUserInfo: () => {
				getUserAddress(scope);
				return;
			},

			deleteCartItem: product => {
				return;
			},

			createUser: user => {
				let store = scope.state.store;
				fetch("http://127.0.0.1:8000/api/users/create/", {
					method: "POST", // *GET, POST, PUT, DELETE, etc.
					body: JSON.stringify({
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						password: user.password
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => {
					if (response.ok) {
						scope.state.actions.getAuth(user);
					}
				});
			},

			updateUser: user => {
				return;
			},

			emptyCart: () => {
				let store = scope.state.store;
				store.session.cart = [];
				scope.setState({ store });
			}
		}
	};
};

export default getState;
