import React, { Component } from "react";
import "../../styles/login.css";
import "../../styles/profile.css";
// import {LogingIn} from "../component/loginIn";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: ""
		};
		this.accessState = this.accessState.bind(this);
	}

	accessState = () => {
		return this.state;
	};

	render() {
		// const user = this.state;
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						var user = store.session.user;
						return (
							<div className="container">
								<div className="row">
									<div className="col-4">
										<p>user info</p>
										<p>user Image</p>
										<h3>First Name : {user.first_name}</h3>
										<h3>Last Name : {user.last_name}</h3>
										<h4>Email : {user.email}</h4>
										<h4>Phone : {user.phone}</h4>
									</div>
									<div className="col-8">
										<nav>
											<div
												className="nav nav-tabs"
												id="nav-tab"
												role="tablist">
												<a
													className="nav-item nav-link active"
													id="nav-home-tab"
													data-toggle="tab"
													href="#nav-home"
													role="tab"
													aria-controls="nav-home"
													aria-selected="true">
													Profile Info
												</a>
												<a
													className="nav-item nav-link"
													id="nav-profile-tab"
													data-toggle="tab"
													href="#nav-profile"
													role="tab"
													aria-controls="nav-profile"
													aria-selected="false">
													Cart
												</a>
												<a
													className="nav-item nav-link"
													id="nav-contact-tab"
													data-toggle="tab"
													href="#nav-contact"
													role="tab"
													aria-controls="nav-contact"
													aria-selected="false">
													Update Info
												</a>
											</div>
										</nav>
										<div
											className="tab-content"
											id="nav-tabContent">
											<div
												className="tab-pane fade show active"
												id="nav-home"
												role="tabpanel"
												aria-labelledby="nav-home-tab">
												<div className="container row">
													<h3 className="col-12">
														Billing Address
													</h3>

													<div className="col-12">
														street info
													</div>
													<div className="col-4">
														City
													</div>
													<div className="col-4">
														State
													</div>
													<div className="col-4">
														Postal Code
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="nav-profile"
												role="tabpanel"
												aria-labelledby="nav-profile-tab">
												...
											</div>
											<div
												className="tab-pane fade"
												id="nav-contact"
												role="tabpanel"
												aria-labelledby="nav-contact-tab">
												...
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}

export default Login;

Login.propTypes = {
	history: PropTypes.object
};
