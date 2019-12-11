import React from "react";

export default function Header({loggedIn, logoutFunction}) {
	return (
	<header className="Header">
		<nav>
			{loggedIn && <a href="/">User</a>}
			{loggedIn && <a href="/dashboard">Dashboard</a>}
			{loggedIn && <a href="/createpost">Create Post</a>}
			{!loggedIn && <a href="/login">Log In</a>}
			{!loggedIn && <a href="/signup">Sign Up</a>}
			{loggedIn && <a onClick={() => logoutFunction()}>LogOut</a>}
		</nav>
	</header>
	)
}