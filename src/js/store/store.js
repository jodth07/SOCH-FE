import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";

import slide10 from "../../img/slide_10.jpg";
import slide11 from "../../img/slide_11.jpg";
import slide12 from "../../img/slide_12.jpg";
import slide13 from "../../img/slide_13.jpg";

const getState = scope => {
	return {
		store: {
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

			products: [
				{
					image: slide1,
					title: "My Bitch 3",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					image: slide2,
					title: "My Bitch 3",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					image: slide3,
					title: "My Bitch 1",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				}
			],
			featured: [
				{
					type: "Artist",
					name: "Mary Leytie",
					date: "Nov, 2018",
					description:
						"JavaScript, however, understands the date based on a timestamp derived from Unix time, which is a value consisting of the number of milliseco",
					link: "artists",
					img: slide12
				},
				{
					type: "Service",
					name: "Layered Hair",
					date: "Nov, 2018",
					description:
						"This is a wider card with supporting text below as a natural lead-in to additional content.",
					link: "/services",
					img: slide11
				},
				{
					type: "Product",
					name: "Olaplex Hair Perfector",
					date: "Nov, 2018",
					description:
						"By default, JavaScript will use the browser's time zone and display a date as a full text string:",
					link: "products",
					img: slide10
				}
			],

			session: {
				username: "Rigo",
				email: "rigo",
				loggedIn: false,
				user: {
					firstname: "Rigo",
					lastname: "Fuentes",
					address: "1234 American Way Miami, Fl. 33126"
				}
			},

			cart: []
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
