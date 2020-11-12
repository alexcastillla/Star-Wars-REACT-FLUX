import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardpeoples = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card-columns">
			{store.peoples.map((item, index) => {
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
							<button type="button" className="btn btn-dark">
								More Info
							</button>
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
