import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
// import { propTypes } from "react-bootstrap/esm/Image";

export const Demo = props => {
	const { store, actions } = useContext(Context);
	let name = useParams().name;

	console.log(name);

	return (
		<div className="container">
			<ul className="list-group">
				<li>
					<span>{useParams().name}</span>
				</li>
			</ul>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

Demo.propTypes = {
	name: PropTypes.string
};
