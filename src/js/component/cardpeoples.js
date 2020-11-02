import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardpeoples = () => {
    const { store, actions } = useContext(Context);
    
    // 	console.log(store.planets, "hola");
    // 	let planetas = store.planets;
    // 	console.log(planetas, "hola patata");
	return (
		<div className="card-columns">
			{store.peoples.map((item, index) => {
				return (
					<div className="card" key={index}>
						<img
							className="card-image"
							src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
							alt="Star Wars Logo"
						/>
						<div className="card-body">
							<ul className="card-text">
								<li><span>Birth Year: {item.birth_year}</span></li>
								<li><span>Gender: {item.gender}</span></li>
								<li><span>Height: {item.height}</span></li>
								<li><span>Mass: {item.mass}</span></li>
								<li><span>Skin: {item.skin_color}</span></li>
								<li><span>Eye Color: {item.eye_color}</span></li>
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};
