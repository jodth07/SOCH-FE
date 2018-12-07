import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

import PropTypes from "prop-types";

class PaypalButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showButton: false
		};
		window.React = React;
		window.ReactDOM = ReactDOM;
	}

	componentDidMount() {
		const { isScriptLoaded, isScriptLoadSucceed } = this.props;

		if (isScriptLoaded && isScriptLoadSucceed) {
			this.setState({ showButton: true });
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

		const isLoadedButWasntLoadedBefore =
			!this.state.showButton &&
			!this.props.isScriptLoaded &&
			isScriptLoaded;

		if (isLoadedButWasntLoadedBefore) {
			if (isScriptLoadSucceed) {
				this.setState({ showButton: true });
			}
		}
	}

	render() {
		const paypal = window.PAYPAL;
		const style = {
			layout: "vertical", // horizontal | vertical
			size: "medium", // medium | large | responsive
			shape: "rect", // pill | rect
			color: "gold" // gold | blue | silver | black
		};
		const {
			total,
			currency,
			env,
			commit,
			client,
			onSuccess,
			onError,
			onCancel
		} = this.props;

		const { showButton } = this.state;

		const payment = () =>
			paypal.rest.payment.create(env, client, {
				transactions: [
					{
						amount: {
							total,
							currency
						}
					}
				]
			});

		const onAuthorize = (data, actions) =>
			actions.payment.execute().then(() => {
				const payment = {
					paid: true,
					cancelled: false,
					payerID: data.payerID,
					paymentID: data.paymentID,
					paymentToken: data.paymentToken,
					returnUrl: data.returnUrl
				};

				onSuccess(payment);
			});

		return (
			<div>
				{showButton && (
					<paypal.Button.react
						style={style}
						env={env}
						client={client}
						commit={commit}
						payment={payment}
						onAuthorize={onAuthorize}
						onCancel={onCancel}
						onError={onError}
					/>
				)}
			</div>
		);
	}
}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
	PaypalButton
);

PaypalButton.propTypes = {
	total: PropTypes.number,
	currency: PropTypes.string,
	env: PropTypes.string,
	commit: PropTypes.bool,
	client: PropTypes.object,
	onSuccess: PropTypes.func,
	onError: PropTypes.func,
	onCancel: PropTypes.func,
	isScriptLoaded: PropTypes.bool,
	isScriptLoadSucceed: PropTypes.bool
};
