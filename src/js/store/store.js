import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import loadGetters from "./getters.jsx";

import { getProducts, getAuthkey, getUserData } from "./getters.jsx";

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
				cart: {},
				purchased: {},

				stagedItem: {},
				logged_in: false
			}
		},
		actions: {
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
				return;
			},

			addProductToCart: product => {
				let usercart = scope.state.store;
				usercart.cart.push(product);
				scope.setState({ usercart });
				alert("You just added " + product.name + " to the cart.");
			},

			deleteItemInCart: product => {
				let mistake = scope.state.store;
				mistake.cart.splice(product, 1);
				scope.setState(mistake);
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
				});
				scope.state.actions.getAuth(user);
			},

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

			addToCart: item => {
				let store = scope.state.store;
				store.session.cart.push(item);
				scope.setState({ store });
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
