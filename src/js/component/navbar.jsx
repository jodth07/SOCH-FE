import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
					{/* <div className="container"> */}
					<Link className="navbar-brand" to={"/"}>
						Sisters of Culture Hair
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to={"/stylists"}>
									Stylists
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={"/products"}>
									Products
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={"/styles"}>
									Styles
								</Link>
							</li>

							{/* <li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Dropdown
								</a>

								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li> */}
						</ul>

						<form className="form-inline my-2 my-lg-0">
							<Context.Consumer>
								{({ store }) => {
									if (store.session.loggedIn) {
										return (
											<ul className="navbar-nav mr-auto">
												<li className="nav-item">
													<Link
														to="/userInfo"
														className="nav-link">
														Hello{" "}
														{
															store.session.user
																.firstname
														}
														!{" "}
													</Link>
												</li>
												<li className="nav-item">
													<Link
														to="/"
														className="nav-link">
														Logout{" "}
													</Link>
												</li>
											</ul>
										);
									} else {
										return (
											<ul className="navbar-nav mr-auto">
												<li className="nav-item">
													<Link
														className="nav-link"
														to={"/login"}>
														Login | Signup
													</Link>
												</li>
											</ul>
										);
									}
								}}
							</Context.Consumer>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link className="nav-link" to={"/cart"}>
										Cart
									</Link>
								</li>
							</ul>
						</form>
					</div>
					{/* </div> */}
				</nav>
			</React.Fragment>
		);
	}
}
