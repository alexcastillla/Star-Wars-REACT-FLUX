import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img
					src="https://vignette.wikia.nocookie.net/jonnymesh/images/5/5a/Star_Wars_Logo..png/revision/latest?cb=20170726161211&path-prefix=es"
					className="iconStarWars"
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">
						<i className="fab fa-galactic-republic" />
					</button>
				</Link>
			</div>
		</nav>
	);
};
