import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import your own components
import Navbar from "./views/navbar.jsx";
import Footer from "./views/footer.jsx";
import Home from "./views/home.jsx";
import Artists from "./views/artists.jsx";
import ProductBio from "./views/productBio.jsx";

//create your first component
export default class Layout extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/index" component={Home} />
						<Route path="/product" component={ProductBio} />
						<Route path="/artits" component={Artists} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
