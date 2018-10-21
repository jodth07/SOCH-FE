import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
				{/* <div className="container"> */}
				<Link className="navbar-brand" to={"/index"}>
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
							<Link className="nav-link" to={"/artists"}>
								Artists
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to={"/products"}>
								Products
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to={"/services"}>
								Services
							</Link>
						</li>

						<li className="nav-item dropdown">
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
						</li>
					</ul>

					<form className="form-inline my-2 my-lg-0">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to={"/login"}>
									Login | Signup
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/checkout"}>
									checkout
								</Link>
							</li>
						</ul>

						{/* <input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/> */}
						{/* <button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button> */}
					</form>
				</div>
				{/* </div> */}
			</nav>
		);
	}
}
