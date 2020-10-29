const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//--------------------------------Aqui se guarda informacion
			planets: [],
			peoples: []
		},
		actions: {
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error("I can't load characters");
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setPlanets(responseAsJson);
					})
					.catch(error => {
						//manejo de errores
						console.log(error);
					});
			},
			setPlanets: characters => {
				let arr = characters.results;

				arr.map((planet, index) => {
					//console.log(character[index], "ccccccc");
					getStore().planets.push({
						name: planet.name,
						rotation_period: planet.rotation_period,
						orbital_period: planet.orbital_period,
						diameter: planet.diameter,
						climate: planet.climate
					});
				});
			},
			getPeoples: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET"
				})
					.then(response => {
						if (!response.ok) {
							throw Error("I can't load characters");
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setPeoples(responseAsJson);
					})
					.catch(error => {
						//manejo de errores
						console.log(error);
					});
			},
			setPeoples: characters => {
				let arr = characters.results;
				//console.log(arr);
				arr.map((people, index) => {
					//console.log(character[index], "ccccccc");
					getStore().peoples.push({
						name: people.name,
						height: people.height,
						mass: people.mass,
						birth_year: people.birth_year,
						gender: people.gender
					});
				});
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
