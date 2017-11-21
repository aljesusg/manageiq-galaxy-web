import React from "react";
import LoginForm from '../forms/LoginForm';

class Login extends React.Component {

	submit = (data) => {
		console.log(data)
	};

	render() {
		return (
			<div>
				<h1>LOGIN PAGE</h1>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}


export default Login;