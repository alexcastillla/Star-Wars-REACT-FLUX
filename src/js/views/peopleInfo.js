import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
// import { propTypes } from "react-bootstrap/esm/Image";

export const PeopleInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	const findPeopleFuction = () => {
		let newPeopleArray = "";
		for (let index = 0; index < store.peoples.length; index++) {
			if (store.peoples[index].name == params.theid) {
				newPeopleArray = store.peoples[index];
			}
		}
		return newPeopleArray;
	};
	console.log(findPeopleFuction());

	return (
		<div className="container">
			<ul className="list-group">
				<img
					className="card-image"
					src="https://i.blogs.es/dafdab/jar_jar_binks/450_1000.jpg"
					alt="Star Wars"
				/>
				<span>
					<h1>Name: {findPeopleFuction().name}</h1>
				</span>
				<span>
					<h2>Gender: {findPeopleFuction().gender}</h2>
				</span>
				<span>
					<h3>Skin color: {findPeopleFuction().skin_color}</h3>
				</span>
			</ul>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
