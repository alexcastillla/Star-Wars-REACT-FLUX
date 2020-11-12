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
				newPlanetArray = store.planets[index];
			}
		}
		return newPlanetArray;
	};
	console.log(findPlanetFuction());

	return (
		<div className="container">
			<ul className="list-group">
				<span>
					<h1>Name: {findPlanetFuction().name}</h1>
				</span>
				<span>
					<h2>Climate: {findPlanetFuction().climate}</h2>
				</span>
				<span>
					<h3>Diameter: {findPlanetFuction().diameter}</h3>
				</span>
			</ul>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
