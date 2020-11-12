import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let deleteLine = index => {
		const newTodos = [...store.fav];
		newTodos.splice(index, 1);
		store.fav = [...newTodos];
		actions.setFavDeleted();
	};

	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img
					src="https://vignette.wikia.nocookie.net/jonnymesh/images/5/5a/Star_Wars_Logo..png/revision/latest?cb=20170726161211&path-prefix=es"
					className="iconStarWars"
				/>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title={store.fav.length + " Favorites"}>
					{store.fav.map((item, index) => {
						return (
							<Dropdown.Item key={index}>
								{item}
								<button className="remove" onClick={() => deleteLine(index)}>
									✔
								</button>
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
