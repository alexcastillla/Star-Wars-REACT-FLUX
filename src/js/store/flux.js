import { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//--------------------------------Aqui se guarda informacion
			fav: [],
			planets: [],
			peoples: []
		},
		actions: {
			getPlanets: async () => {
				const data = await fetch("https://swapi.dev/api/planets/");
				const user = await data.json();
				// for (const i in user.results) {
				// 	getStore().planets.push(user.results[i]);
				// }
				setStore({ planets: user.results });
			},

			getPeoples: async () => {
				const data = await fetch("https://swapi.dev/api/people/");
				const user = await data.json();
				// for (const i in user.results) {
				// 	getStore().peoples.push(user.results[i]);
				// }
				setStore({ peoples: user.results });
			},

			setFav: name => {
				const store = getStore();
				setStore({ fav: [...getStore().fav, name] });
				//setStore({ name: name });
				console.log(store.fav, "Im the fav list");
			}

			//-----------------------Aqui se guardan funciones que las guarda en store---------------------
			// Use getActions to call a function within a fuction
		}
	};
};

export default getState;
