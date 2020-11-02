import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardpeoples } from "../component/cardpeoples";

export const Home = () => (
	<div className="m-4 p-2">
		{/* <div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div> */}
		<div>
			<h1 className="text-danger">Characters</h1>
			<div>
				<Cardpeoples />
			</div>
		</div>
		<div className="mt-3">
			<h1 className="text-danger">Planets</h1>
		</div>
	</div>
);
