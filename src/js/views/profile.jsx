import React, { Component } from "react";
import "../../styles/login.css";
import "../../styles/profile.css";
// import {LogingIn} from "../component/loginIn";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import UpdateInfo from "../component/profile/updateInfo.jsx";

export class Profile extends Component {
	constructor() {
		super();
		this.state = {
			show_div_nav: 1
		};
	}

	render() {
		var show_nav = "nav-item nav-link active";
		var hide_nav = "nav-item nav-link";
		var hide_div = "tab-pane fade";
		var show_div = "tab-pane fade show active";
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						var user = store.session.user;
						return (
							<div className="container mb-5">
								<div className="row">
									<div className="col-4">
										<div className="card">
											<div className="card-body">
												<h5 className="card-title">
													Welcome User
												</h5>

												<p className="row container justify-content-between">
													<strong>First Name</strong>
													{user.first_name}
												</p>

												<p className="row container justify-content-between">
													<strong>Last Name</strong>
													{user.last_name}
												</p>

												<p className="row container justify-content-between">
													<strong>Phone</strong>
													{user.phone}
												</p>

												<p className="row container justify-content-between">
													<strong>Email</strong>
													{user.email}
												</p>

												<a className="card-link">
													Update Info
												</a>
												<a className="card-link">
													View Cart
												</a>
											</div>
										</div>
									</div>
									<div className="col-8">
										<nav>
											<div
												className="nav nav-tabs"
												id="nav-tab"
												role="tablist">
												<a
													onClick={() => {
														// actions.getUserInfo();
														console.log(user.id);
														this.setState({
															show_div_nav: 1
														});
													}}
													className={
														this.state
															.show_div_nav === 1
															? show_nav
															: hide_nav
													}
													id="nav-home-tab"
													data-toggle="tab"
													href="#nav-home"
													role="tab"
													aria-controls="nav-home"
													aria-selected="false">
													Profile Info
												</a>
												<a
													onClick={() =>
														this.setState({
															show_div_nav: 2
														})
													}
													className={
														this.state
															.show_div_nav === 2
															? show_nav
															: hide_nav
													}
													id="nav-profile-tab"
													data-toggle="tab"
													href="#nav-profile"
													role="tab"
													aria-controls="nav-profile"
													aria-selected={
														this.state
															.show_div_nav === 2
															? "true"
															: "false"
													}>
													Cart
												</a>
												<a
													onClick={() =>
														this.setState({
															show_div_nav: 3
														})
													}
													className={
														this.state
															.show_div_nav === 3
															? show_nav
															: hide_nav
													}
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
												className={
													this.state.show_div_nav ===
													1
														? show_div
														: hide_div
												}
												id="nav-home"
												role="tabpanel"
												aria-labelledby="nav-home-tab">
												<div className="container row">
													<p>some info profile</p>
												</div>
											</div>

											<div
												className={
													this.state.show_div_nav ===
													2
														? show_div
														: hide_div
												}
												id="nav-profile"
												role="tabpanel"
												aria-labelledby="nav-profile-tab">
												<p>some info cart</p>
											</div>

											<div
												className={
													this.state.show_div_nav ===
													3
														? show_div
														: hide_div
												}
												id="nav-contact"
												role="tabpanel"
												aria-labelledby="nav-contact-tab">
												<UpdateInfo />
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

export default Profile;

Profile.propTypes = {
	history: PropTypes.object
};
