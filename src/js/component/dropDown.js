import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const DropDown = () => {
	const { store, actions } = useContext(Context);

	store.fav.map((task, index) => {
		console.log(task, "en dropDown");
	});
	return (
		<li>
			{store.fav}

			{/* <IconButton //Sacado con material-ui
					aria-label="Delete"
					onClick={() => {
						deleteLine(index);
					}}>
					<DeleteIcon />
				</IconButton> */}
		</li>
	);
};
