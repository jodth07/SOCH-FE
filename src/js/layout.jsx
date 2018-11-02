import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

import Artists from "./views/artists.jsx";
import ArtistBio from "./views/artistBio.jsx";
import Products from "./views/products.jsx";
import ProductBio from "./views/productBio.jsx";
import Services from "./views/services.jsx";
import ServiceBio from "./views/serviceBio.jsx";

import Login from "./views/login.jsx";
import Checkout from "./views/checkout.jsx";

import Home from "./views/home.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<div className="pt-5 mt-3">
						<Switch>
							<Route exact path="/" component={Home} />

							<Route path="/artists" component={Artists} />
							<Route
								path="/artist/:artistBio"
								component={ArtistBio}
							/>

							<Route path="/products" component={Products} />
							<Route
								path="/product/:productId"
								component={ProductBio}
							/>

							<Route path="/services" component={Services} />
							<Route
								path="/service/:serviceID"
								component={ServiceBio}
							/>

							<Route path="/login" component={Login} />
							<Route path="/checkout" component={Checkout} />

							<Route default render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
