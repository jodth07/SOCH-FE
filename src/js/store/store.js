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
					type: "product",
					link: "products",
					image: slide1,
					title: "My Product 1",
					quantityRemaining: 10,
					cost: 20,
					description:
						"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				},
				{
					type: "product",
					link: "products",
					image: slide2,
					title: "My Product 2",
					description:
						"survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
				},
				{
					type: "product",
					link: "products",
					image: slide3,
					title: "My Product 3",
					description:
						"sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					type: "product",
					link: "products",
					image: slide1,
					title: "My Product 4",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
				},
				{
					type: "product",
					link: "products",
					image: slide2,
					title: "My Product 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					type: "product",
					link: "products",
					image: slide3,
					title: "My Product 6",
					description:
						"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				},
				{
					type: "product",
					link: "products",
					image: slide1,
					title: "My Product 7",
					description:
						'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. '
				},
				{
					type: "product",
					link: "products",
					image: slide2,
					title: "My Product 8",
					description:
						"This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
				},
				{
					type: "product",
					link: "products",
					image: slide3,
					title: "My Product 9",
					description:
						'"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
				}
			],
			services: [
				{
					type: "service",
					link: "services",
					image: slide1,
					duration: 60,
					title: "Hair Service 1",
					description:
						"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
				},
				{
					type: "service",
					link: "services",
					image: slide2,
					duration: 60,
					title: "Hair Service 2",
					description:
						"survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"
				},
				{
					type: "service",
					link: "services",
					image: slide3,
					duration: 60,
					title: "Hair Service 3",
					description:
						"sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
				},
				{
					type: "service",
					link: "services",
					image: slide1,
					duration: 60,
					title: "Hair Service 4",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha"
				},
				{
					type: "service",
					link: "services",
					image: slide2,
					duration: 60,
					title: "Hair Service 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
				},
				{
					type: "service",
					link: "services",
					image: slide3,
					duration: 60,
					title: "Hair Service 6",
					description:
						"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
				},
				{
					type: "service",
					link: "services",
					image: slide1,
					duration: 60,
					title: "Hair Service 7",
					description:
						'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. '
				},
				{
					type: "service",
					link: "services",
					image: slide2,
					duration: 60,
					title: "Hair Service 8",
					description:
						"This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"
				},
				{
					type: "service",
					link: "services",
					image: slide3,
					duration: 60,
					title: "Hair Service 9",
					description:
						'"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
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
