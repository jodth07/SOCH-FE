import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import loadGetters from "./getters.jsx";

import { getProducts, getAuthkey } from "./getters.jsx";

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

			users: [
				{
					session: false,
					stylist: false,
					username: "rigo",
					password: "rigo",
					firstname: "Rigo",
					lastname: "Fuentes",
					address: "1234 American Way Miami, Fl. 33126",
					country: "usa",
					state: "fl",
					zipCode: "33330",
					cart: [],
					appointments: [],
					purchaseHistory: [],
					intersts: []
				},
				{
					session: false,
					artist: true,
					username: "monty",
					password: "python",
					firstname: "Monty",
					lastname: "Python",
					address: "1234 American Way Miami, Fl. 33126",
					cart: [],
					appointments: [],
					purchaseHistory: [],
					intersts: []
				}
			],

			session: {
				token: "",
				user: {
					session: false,
					stylist: false,
					username: "rigo",
					password: "rigo",
					firstname: "Rigo",
					lastname: "Fuentes",
					address: "1234 American Way Miami, Fl. 33126",
					country: "usa",
					state: "fl",
					zipCode: "33330",
					cart: [],
					appointments: [],
					purchaseHistory: [],
					intersts: []
				},

				cart: [],

				stagedItem: {},

				loggedIn: false
			}
		},
		actions: {
			updateProducts: () => {
				getProducts(scope);
			},

			getAuth: user => {
				getAuthkey(scope, user.username, user.password);
				// if (scope.session.token.length > 1) {
				return true;
				// }
			},

			changeColor: (element, color) => {
				let store = scope.state.store;
				store.demo[element].background = color;
				scope.setState({ store });
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
				store.users.push(user);
				store.session.user = user;
				// store.session.email = user.email;

				scope.setState({ store });
			},

			isLegalUser: c_user => {
				// update store info
				let store = scope.state.store;

				// get user from store
				let s_user = store.users.filter(
					_user => _user.username == c_user.username
				)[0];

				// set user session
				if (s_user && s_user.password === c_user.password) {
					store.session.loggedIn = true;
					store.session.user = s_user;
					scope.setState({ store });
					return true;
				}
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
			}
		}
	};
};

export default getState;
