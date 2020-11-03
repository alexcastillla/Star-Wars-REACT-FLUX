import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardpeoples = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{/* <p>Hola {store.peoples[0].gender}</p> */}
			{store.peoples.map((item, index) => {
				// console.log(item, "soy un item");
				return (
					<div className="card" key={index}>
						<img
							className="card-image"
							src="https://i.blogs.es/dafdab/jar_jar_binks/450_1000.jpg"
							alt="Star Wars"
						/>
						<div className="card-body">
							<ul className="card-text">
								<li>
									<span>Name: {item.name}</span>
								</li>
								<li>
									<span>Birth Year: {item.birth_year}</span>
								</li>
								<li>
									<span>Gender: {item.gender}</span>
								</li>
								<li>
									<span>Height: {item.height}</span>
								</li>
								<li>
									<span>Skin: {item.skin_color}</span>
								</li>
								<li>
									<span>Eye Color: {item.eye_color}</span>
								</li>
							</ul>
						</div>
						<div className="card-footer">
							<Link to={`/${item.name}`}>
								<button type="button" className="btn btn-primary">
									More Info
								</button>
							</Link>
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
