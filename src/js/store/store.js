import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";

import slide4 from "../../img/slide_4.jpg";
import slide5 from "../../img/slide_5.jpg";
import slide6 from "../../img/slide_6.jpg";

import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import slide13 from "../../img/slide_13.jpg";

const getState = scope => {
	return {
		store: {
			posts: [],
			items_1: [
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
					altText: "Services",
					title: "services",
					caption: "Services"
				}
			],

			items_2: [
				{
					src: slide4,
					altText: "Artists",
					caption: "Artists"
				},
				{
					src: slide5,
					altText: "Products",
					caption: "Products"
				},
				{
					src: slide6,
					altText: "Services",
					caption: "Services"
				}
			],

			products: [
				{
					image: slide1,
					title: "My Bitch 3",
					content: "Noneya"
				},
				{
					image: slide2,
					title: "My Bitch 3",
					content: "Noneya"
				},
				{
					image: slide3,
					title: "My Bitch 1",
					content: "Noneya"
				}
			],

			session: {
				username: "Rigo",
				email: "rigocodes@gmail.com",
				loggedIn: false,
				user: {
					firstname: "Rigo",
					lastname: "Fuentes",
					address: "1234 American Way Miami, Fl. 33126"
				}
			},

			cart: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
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

			isLegalUser: user => {
				let store = scope.state.store;
				if (
					user.username === store.session.username &&
					user.email === store.session.email
				) {
					store.session.loggedIn = true;
					scope.setState({ store });
					return true;
				}
			}
		}
	};
};

export default getState;
