import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

import ArtistPage from "./views/artist.jsx";
import Products from "./views/products.jsx";
import Styles from "./views/styles.jsx";

import Login from "./views/login.jsx";
import SignUp from "./views/signup.jsx";
import Checkout from "./views/checkout.jsx";
import Profile from "./views/profile.jsx";
import Cart from "./views/cart.jsx";

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

							<Route path="/stylists" component={ArtistPage} />

							<Route path="/products" component={Products} />
							<Route path="/styles" component={Styles} />

							<Route path="/login" component={Login} />
							<Route path="/signup" component={SignUp} />
							<Route path="/cart" component={Cart} />
							<Route path="/checkout" component={Checkout} />
							<Route path="/profile/" component={Profile} />

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
