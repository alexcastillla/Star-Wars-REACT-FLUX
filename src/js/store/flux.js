const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//--------------------------------Aqui se guarda informacion
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: []
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
						console.log(responseAsJson, "linea 32");
						console.log("bbbbbbbbb");

						getActions().setPlanets(responseAsJson);
					})
					.catch(error => {
						//manejo de errores
						console.log(error);
					});
			},
			setPlanets: characters => {
				console.log(characters, "linea 43");
				let arr = [];
				for (const key in characters) {
					//console.log(key + ":" + characters[key], "en for in");
					if (key === "results") arr = characters[key];
				}
				console.log(arr, "soy arr");

				arr.map((character, index) => {
					console.log(character[index], "ccccccc");
					getStore().characters.push({
						name: arr[index].name,
						rotation_period: arr[index].rotation_period,
						orbital_period: arr[index].orbital_period,
						diameter: arr[index].diameter,
						climate: arr[index].climate
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
