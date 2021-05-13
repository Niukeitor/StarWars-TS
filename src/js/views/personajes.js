import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Personajes() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card-columns">
				{" "}
				{store.people.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta id={elemento.uid} nombre={elemento.name} baseurl={"/infoPersonajes"} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
