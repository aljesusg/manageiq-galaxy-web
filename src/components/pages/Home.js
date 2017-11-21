import React from "react"
import { Link } from "react-router-dom"

const home = () => (
	<div>
		<h1>Home page</h1>
		<Link to="/login">login</Link>
	</div>

);

export default home;