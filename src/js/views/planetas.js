import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Planetas() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card-columns">
				{" "}
				{store.planets.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta id={elemento.uid} nombre={elemento.name} baseurl={"/infoPlanetas"} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
