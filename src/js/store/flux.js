import { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fav: [],
			planets: [],
			peoples: []
		},
		actions: {
			getPlanets: async () => {
				const data = await fetch("https://swapi.dev/api/planets/");
				const planets_response = await data.json();
				setStore({ planets: planets_response.results });
				if ((planets_response.next = !null)) {
					getActions().getPlanets(planets_response.next.replace(":", "s:"));
				}
			},

			getPeoples: async () => {
				const data = await fetch("https://swapi.dev/api/people/");
				const peoples_response = await data.json();
				setStore({ peoples: peoples_response.results });
				if ((peoples_response.next = !null)) {
					getActions().getPeoples(peoples_response.next.replace(":", "s:"));
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
				console.log(store.fav, "Im the fav list");
			}
		}
	};
};

export default getState;
