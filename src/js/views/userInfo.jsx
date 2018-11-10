import React, { Component } from "react";
import "../../styles/login.css";
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
		const user = this.state;
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						var user = store.session.user;
						return (
							<div className="mainer p-5">
								<div className="row container mt-5">
									<div className="bg-light p-5 col-6 rounded">
										<h3>First Name : {user.firstname}</h3>
										<h3>Last Name : {user.lastname}</h3>
										<h4>Username : {user.username}</h4>
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
