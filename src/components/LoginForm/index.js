import React from "react";

export default function LoginForm( {submitFunction} ) {
	return <div>
		<form onSubmit={e => submitFunction(e)}>
			<h1>Log In</h1>
			<label for="Login Email">Email</label>
			<input type="email" name="loginEmail" placeholder="email"/>
			<label for="loginPassword"> Password</label>
			<input type="password" name="loginPassword" placeholder="password"/>
			<button className="btn pink lighten-1 z-depth-0">Log In</button>
		</form>
	</div>
}