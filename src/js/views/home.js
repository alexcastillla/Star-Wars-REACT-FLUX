import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardpeoples } from "../component/cardpeoples";
import { Cardplanets } from "../component/cardplanets";

export const Home = () => (
	<div className="m-4 p-2">
		<div>
			<h1 className="text-danger">Characters</h1>
			<div className="container-cards">
				<Cardpeoples />
			</div>
		</div>
		<div className="mt-3">
			<h1 className="text-danger">Planets</h1>
			<div className="container-cards">
				<Cardplanets />
			</div>
		</div>
	</div>
);
