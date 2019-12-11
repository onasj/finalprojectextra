import React from "react";
import CreateAccountForm from "..//..//components/CreateAccountForm"

export default function Signup( {signupFunction}) {
	return (
		<div>
			<h1>Create account here</h1>
			<CreateAccountForm submitFunction={signupFunction}/>
		</div>
	)
}