import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const PlanetsInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	const findPlanetFuction = () => {
		let newPlanetArray = "";
		for (let index = 0; index < store.planets.length; index++) {
			if (store.planets[index].name == params.theid) {
				newPeopleArray = store.planets[index];
			}
		}
		return newPlanetArray;
	};
	console.log(findPlanetFuction());

	return (
		<div className="container">
			<ul className="list-group">
				<img
					className="card-image"
					src="https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
					alt="Star Wars"
				/>
				<span>
					<h1>Name: {findPeopleFuction().name}</h1>
				</span>
				<span>
					<h2>Gender: {findPeopleFuction().rotation}</h2>
				</span>
				<span>
					<h3>Skin color: {findPeopleFuction().diameter}</h3>
				</span>
			</ul>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
