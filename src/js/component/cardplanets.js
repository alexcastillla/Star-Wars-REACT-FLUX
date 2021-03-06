import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardplanets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{store.planets.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-image"
							src="https://www.conflictofjustice.com/wp-content/uploads/2019/02/header-earth-1038x400.jpg"
							alt="Star Wars"
						/>
						<div className="card-body">
							<ul className="card-text">
								<li>
									<span>Name: {item.name}</span>
								</li>
								<li>
									<span>Rotation Period: {item.rotation_period}</span>
								</li>
								<li>
									<span>Diameter: {item.diameter}</span>
								</li>
								<li>
									<span>Climate: {item.climate}</span>
								</li>
								<li>
									<span>Gravity: {item.gravity}</span>
								</li>
								<li>
									<span>Terrain: {item.terrain}</span>
								</li>
							</ul>
						</div>
						<div className="card-footer">
							<Link to={`planetInfo/${item.name}`}>
								<button type="button" className="btn btn-primary">
									More Info
								</button>
							</Link>
							<button type="button" className="btn btn-primary" onClick={() => actions.setFav(item.name)}>
								❤
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
