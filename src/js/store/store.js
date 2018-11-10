import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";

import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import slide13 from "../../img/slide_13.jpg";

import { getProducts } from "./getters.jsx";

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

			products: [
				{
					id: 13,
					type: "product",
					link: "products",
					image: slide1,
					title: "My Product 1",
					name: "My Product 1",
					quantityRemaining: 10,
					quantity: 1,
					price: 20,
					description:
						"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				},
				{
					id: 14,
					type: "product",
					link: "products",
					image: slide2,
					quantityRemaining: 15,
					quantity: 1,
					price: 25,
					title: "My Product 2",
					name: "My Product 2",
					description:
						"survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
				},
				{
					id: 15,
					type: "product",
					link: "products",
					image: slide3,
					quantityRemaining: 18,
					quantity: 1,
					price: 28.5,
					title: "My Product 3",
					name: "My Product 3",
					description:
						"sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					id: 16,
					type: "product",
					link: "products",
					image: slide1,
					quantityRemaining: 14,
					quantity: 1,
					price: 23,
					title: "My Product 4",
					name: "My Product 4",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
				},
				{
					id: 17,
					type: "product",
					link: "products",
					quantityRemaining: 16,
					quantity: 1,
					price: 28,
					image: slide2,
					title: "My Product 5",
					name: "My Product 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					id: 18,
					type: "product",
					link: "products",
					image: slide3,
					quantityRemaining: 15,
					quantity: 1,
					price: 26,
					title: "My Product 6",
					name: "My Product 6",
					description:
						"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				},
				{
					id: 19,
					type: "product",
					link: "products",
					quantityRemaining: 15,
					quantity: 1,
					price: 29,
					image: slide1,
					title: "My Product 7",
					name: "My Product 7",
					description:
						'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. '
				},
				{
					id: 20,
					type: "product",
					link: "products",
					quantityRemaining: 15,
					quantity: 1,
					price: 34,
					name: "My Product 8",
					image: slide2,
					title: "My Product 8",
					description:
						"This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
				},
				{
					id: 21,
					type: "product",
					link: "products",
					quantityRemaining: 15,
					quantity: 1,
					price: 32,
					image: slide3,
					title: "My Product 9",
					name: "My Product 9",
					description:
						'"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
				}
			],

			styles: [
				{
					id: 1,
					name: "Hair style 1",
					link: "style/",
					type: "style",
					image: slide1,
					duration: 60,
					title: "Hair style 1",
					description:
						"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				},
				{
					id: 2,
					name: "Hair style 2",
					link: "style_Hair style 2",
					type: "style",
					image: slide2,
					duration: 60,
					title: "Hair style 2",
					description:
						"survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
				},
				{
					id: 3,
					name: "Hair style 3",
					link: "style/",
					type: "style",
					image: slide3,
					duration: 60,
					title: "Hair style 3",
					description:
						"sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					id: 4,
					name: "Hair style 4",
					link: "style/", // + name,
					type: "style",
					image: slide1,
					duration: 60,
					title: "Hair style 4",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
				},
				{
					id: 5,
					name: "Hair style 5",
					link: "style/", // + name,
					type: "style",
					image: slide2,
					duration: 60,
					title: "Hair style 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					id: 6,
					name: "Hair style 6",
					link: "style/", // + name,
					type: "style",
					image: slide3,
					duration: 60,
					title: "Hair style 6",
					description:
						"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				},
				{
					id: 7,
					title: "Hair style 7",
					name: "Hair style 7",
					link: "style/", // + name,
					type: "style",
					image: slide1,
					duration: 60,
					description:
						'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. '
				},
				{
					id: 8,
					name: "Hair style 8",
					link: "style/", // + name,
					type: "style",
					image: slide2,
					duration: 60,
					title: "Hair style 8",
					description:
						"This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
				},
				{
					id: 9,
					name: "Hair style 9",
					type: "style",
					link: "style/", // + name,
					image: slide3,
					duration: 60,
					title: "Hair style 9",
					description:
						'"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
				}
			],

			featured: [
				{
					id: 10,
					type: "Artist",
					name: "Mary Leytie",
					date: "Nov, 2018",
					description:
						"JavaScript, however, understands the date based on a timestamp derived from Unix time, which is a value consisting of the number of milliseco",
					link: "artists",
					img: slide12
				},
				{
					id: 11,
					type: "Style",
					name: "Layered Hair",

					date: "Nov, 2018",
					description:
						"This is a wider card with supporting text below as a natural lead-in to additional content.",
					link: "/styles",
					img: slide11
				},
				{
					id: 12,
					type: "Product",
					name: "Olaplex Hair Perfector",
					date: "Nov, 2018",
					description:
						"By default, JavaScript will use the browser's time zone and display a date as a full text string:",
					link: "products",
					img: slide10
				}
			],

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
