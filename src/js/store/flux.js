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
				const planets = await data.json();
				setStore({ planets: planets.results });
				if (planets.next) {
					getActions().getPlanets(planets.next.replace(":", "s:"));
				}
			},

			getPeoples: async () => {
				const data = await fetch("https://swapi.dev/api/people/");
				const peoples = await data.json();
				setStore({ peoples: peoples.results });
				if (peoples.next) {
					getActions().getPeoples(peoples.next.replace(":", "s:"));
				}
			},

			setFav: name => {
				let exists = false;
				const store = getStore();
				store.fav.map((item, index) => {
					if (name == item) exists = true;
				});
				if (exists == false) setStore({ fav: [...getStore().fav, name] });
			},

			setFavDeleted: () => {
				const store = getStore();
				setStore({ fav: [...getStore().fav] });
				//setStore({ name: name });
				console.log(store.fav, "Im the fav list");
			}
		}
	};
};

export default getState;
