import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import loadGetters from "./getters.jsx";
import createUserCartItems from "./setters.jsx";

import { getProducts, getAuthkey, getUserAddress } from "./getters.jsx";

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

			featured: {}, // Recieving from API

			session: {
				token: "",
				user: {},
				cart: {
					id: 1,
					products: [3, 4, 19],
					purchase_date: "2018-11-27",
					purchased: false,
					subtotal: "187.00",
					tax_percentage: "0.06500",
					tax_total: "12.16",
					timestamp: "2018-11-24T21:47:24.862174Z",
					total: "199.16",
					updated: "2018-11-27T19:37:36.340543Z",
					user: 2
				},
				cart_items: [
					{
						id: 12,
						product: {
							id: 21,
							title: "Beautiful Textures Tangle Taming Shampoo",
							category: "Product",
							description:
								"Beautiful Textures Tangle Taming Shampoo",
							duration: 0,
							image: 4,
							price: "11.00"
						},
						quantity: 1,
						subtotal: "11.00"
					},

					{
						id: 13,
						product: {
							id: 3,
							title: "Smooth & Straight Long Locks",
							category: "Style",
							description:
								"This look is easy to get with a quality weave. We … hair, so options are plentiful after your weave.",
							duration: 40,
							image: 3,
							price: "65.00"
						},
						quantity: 1,
						subtotal: "65.00"
					}
				],
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

			// Own API Calls

			// Additional API calls

			// products
			updateProducts: () => {
				getProducts(scope);
			},
			// Users
			getAuth: user => {
				getAuthkey(scope, user.email, user.password);
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

			addToCart: cart => {
				createUserCartItems(scope, cart);
			},

			removeFromCart: item => {
				let store = scope.state.store;
				store.session.cart.push(item);
				scope.setState({ store });
			},

			emptyCart: () => {
				let store = scope.state.store;
				store.session.cart = [];
				scope.setState({ store });
			},
			logout: () => {
				let store = scope.state.store;
				store.session.token = "";
				store.session.logged_in = false;
				scope.setState({ store });
			}
		}
	};
};

export default getState;
