const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			vehicles_detail: [],
			favorito: []
		},

		actions: {
			agregarFav: favorito => {
				if (getStore().favorito.includes(favorito)) {
					console.log("ya existe");
				} else {
					let nuevoFavorito = [...getStore().favorito, favorito];
					setStore({
						favorito: nuevoFavorito
					});
				}
			},

			deleteFav: favorito => {
				let i = 0;
				let nuevoFavorito = [...getStore().favorito];
				while (i < getStore().favorito.length) {
					if (getStore().favorito[i] == favorito) {
						nuevoFavorito.splice(i, 1);
					}
					i++;
				}
				setStore({
					favorito: nuevoFavorito
				});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }));
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }));
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
