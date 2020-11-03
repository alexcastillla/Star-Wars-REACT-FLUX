import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardplanets = () => {
	const { store, actions } = useContext(Context);

	// console.log(store.planets, "hola");
	// let planetas = store.planets;
	// console.log(planetas, "hola patata");

	return (
		<div className="card-columns">
			{/* <p>Hola {store.peoples[0].gender}</p> */}
			{store.planets.map((item, index) => {
				// console.log(item, "soy un item");
				return (
					<div className="card" key={index}>
						<img
							className="card-image"
							src="https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
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
							<button type="button" className="btn btn-primary">
								More Info
							</button>
							<button type="button" className="btn btn-secondary">
								❤
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
