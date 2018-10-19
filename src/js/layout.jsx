import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

// import Navbar from "./views/navbar.jsx";
// import Footer from "./views/footer.jsx";
import Artists from "./views/artists.jsx";
import ArtistBio from "./views/artistBio.jsx";
import ProductBio from "./views/productBio.jsx";
import Products from "./views/products.jsx";

import LandingPage from "./views/landingPage.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<div className="pt-5">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/index" component={LandingPage} />

							<Route path="/products" component={Products} />
							<Route
								path="/product/:productId"
								component={ProductBio}
							/>

							<Route path="/services" component={Products} />
							<Route
								path="/service/:serviceID"
								component={ProductBio}
							/>

							<Route path="/artists" component={Artists} />
							<Route
								path="/artist/:artistBio"
								component={ArtistBio}
							/>

							<Route path="/demo" component={Demo} />
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
