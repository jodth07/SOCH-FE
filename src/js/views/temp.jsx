import React, { Component } from "react";

export default class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				username: "",
				email: ""
			}
		};
	}
	render() {
		var newUser = this.state.user;
		return (
    	<form className="container" data-toggle="validator" role="form">
				<div className="form-group">
					<label htmlFor="inputName" className="control-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="inputName"
						placeholder="Cina Saffary"
						required
					/>
				</div>
				<div className="form-group has-feedback">
					<label htmlFor="inputTwitter" className="control-label">
						Twitter
					</label>
					<div className="input-group">
						<span className="input-group-addon">@</span>
						<input
							type="text"
							pattern="^[_A-z0-9]{1,}$"
							maxLength="15"
							className="form-control"
							id="inputTwitter"
							placeholder="1000hz"
							required
						/>
					</div>
					<span
						className="glyphicon form-control-feedback"
						aria-hidden="true"
					/>
					<div className="help-block with-errors">
						Hey look, this one has feedback icons!
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputEmail" className="control-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="inputEmail"
						placeholder="Email"
						data-error="Bruh, that email address is invalid"
						required
					/>
					<div className="help-block with-errors" />
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword" className="control-label">
						Password
					</label>
					<div className="form-inline row">
						<div className="form-group col-sm-6">
							<input
								type="password"
								data-minlength="6"
								className="form-control"
								id="inputPassword"
								placeholder="Password"
								required
							/>
							<div className="help-block">
								Minimum of 6 characters
							</div>
						</div>
						<div className="form-group col-sm-6">
							<input
								type="password"
								className="form-control"
								id="inputPasswordConfirm"
								data-match="#inputPassword"
								data-match-error="Whoops, these don't match"
								placeholder="Confirm"
								required
							/>
							<div className="help-block with-errors" />
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="radio">
						<label>
							<input type="radio" name="underwear" required />
							Boxers
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="underwear" required />
							Briefs
						</label>
					</div>
				</div>
				<div className="form-group">
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								id="terms"
								data-error="Before you wreck yourself"
								required
							/>
							Check yourself
						</label>
						<div className="help-block with-errors" />
					</div>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
    
		);
	}
}


