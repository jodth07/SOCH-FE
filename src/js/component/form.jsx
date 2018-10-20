import React from "react";

export default function Form() {
	return (
		<form className="needs-validation col-6">
			<div className="form-row">
				<div className="col-md-6 mb-3 p-1">
					<label htmlFor="validationServer01">First name</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="First name"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
				<div className="col-md-6 mb-3 p-1">
					<label htmlFor="validationServer02">Last name</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Last name"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
			</div>
			<div className="form-row">
				<div className="col-md-12 mb-3">
					<label htmlFor="validationServerUsername">Username</label>
					<div className="input-group">
						<div className="input-group-prepend">
							<span
								className="input-group-text"
								id="inputGroupPrepend3">
								@
							</span>
						</div>
						<input
							type="text"
							className="form-control"
							id="validationServerUsername"
							placeholder="Username"
							aria-describedby="inputGroupPrepend3"
							required
						/>
						<div className="invalid-feedback">
							Please type in a username.
						</div>
					</div>
				</div>
			</div>
			<div className="form-row">
				<div className="col-md-12 mb-3">
					<label htmlFor="validationServer01">Address1</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Address1"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
			</div>
			<div className="form-row">
				<div className="col-md-12 mb-3">
					<label htmlFor="validationServer01">Address2</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Address2"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
			</div>
			<div className="form-row">
				<div className="col-md-6 mb-3">
					<label htmlFor="validationServer03">Country</label>
					<select id="inputState" className="form-control">
						<option value>Country</option>
						<option>USA</option>
						<option>Canada</option>
						<option>UK</option>
						<option>Brazil</option>
						<option>Australia</option>
						<option>Egypt</option>
					</select>
					<div className="invalid-feedback">
						Please provide a valid city.
					</div>
				</div>
				<div className="col-md-3 mb-3">
					<label htmlFor="validationServer04">State</label>
					<select id="inputState" className="form-control">
						<option value>State</option>
						<option>FL</option>
						<option>GA</option>
						<option>NY</option>
						<option>CA</option>
						<option>TX</option>
						<option>DE</option>
						<option>AR</option>
						<option>CO</option>
						<option>AZ</option>
						<option>CT</option>
						<option>AK</option>
						<option>HI</option>
					</select>
					<div className="invalid-feedback" />
				</div>
				<div className="col-md-3 mb-3">
					<label htmlFor="validationServer05">Zip</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Zip"
						required
					/>
					<div className="invalid-feedback" />
				</div>
			</div>
			<hr className="my-4" />
			<div className="form-group">
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value=""
						id="invalidCheck3"
						required
					/>
					<label className="form-check-label" htmlFor="invalidCheck3">
						Shipping address is the same as my billing address.
					</label>
					<div className="invalid-feedback" />
				</div>
			</div>
			<div className="form-group">
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value=""
						id="invalidCheck3"
						required
					/>
					<label className="form-check-label" htmlFor="invalidCheck3">
						Save this information for next time
					</label>
					<div className="invalid-feedback" />
				</div>
			</div>
			<hr className="my-4" />

			<h5> Payment </h5>

			<div className="form-check mt-4">
				<input
					className="form-check-input"
					type="radio"
					name="exampleRadios"
					id="exampleRadios1"
					value="option1"
					defaultChecked
				/>
				<label className="form-check-label" htmlFor="exampleRadios1">
					Credit Card
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="exampleRadios"
					id="exampleRadios2"
					value="option2"
				/>
				<label className="form-check-label" htmlFor="exampleRadios2">
					Debit Card
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="exampleRadios"
					id="exampleRadios2"
					value="option2"
				/>
				<label className="form-check-label" htmlFor="exampleRadios2">
					Pay Pal
				</label>
			</div>

			<div className="form-row">
				<div className="col-md-6 mb-3 mt-4 p-1">
					<label htmlFor="validationServer01">Name on Card</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Name on Card"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
				<div className="col-md-6 mb-3 mt-4 p-1">
					<label htmlFor="validationServer02">
						Credit Card Number
					</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Credit Card Number"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
			</div>

			<div className="form-row">
				<div className="col-md-3 mb-3 mt-4 p-1">
					<label htmlFor="validationServer01">Expiration</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="EXP"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
				<div className="col-md-4 mb-3 mt-4 p-1">
					<label htmlFor="validationServer02">CVV</label>
					<input
						type="text"
						className="form-control"
						id="validationServer05"
						placeholder="Security code"
						required
					/>
					<div className="valid-feedback">Looks good!</div>
				</div>
			</div>

			<hr className="my-4" />

			<button
				className="btn btn-primary col-md-12 mb-3 mt-4"
				type="submit">
				Continue to checkout
			</button>
		</form>
	);
}
