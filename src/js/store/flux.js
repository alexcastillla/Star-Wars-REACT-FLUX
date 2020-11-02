import { useEffect, useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//--------------------------------Aqui se guarda informacion
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

			//-----------------------Aqui se guardan funciones que las guarda en store---------------------
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/* fetch("https://swapi.dev/api/planets/")
					.then(response => {
						if (response.ok) {
							throw new Error("I can't load characters");
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson);

						setStore(responseAsJson);
					})
					.catch(error => {
						//manejo de errores
						console.log(error);
					}); */
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))  //Aqui metemos la API
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
