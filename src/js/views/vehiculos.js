import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Vehiculos() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card-columns">
				{" "}
				{store.vehicles.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta id={elemento.uid} nombre={elemento.name} baseurl={"/infoVehiculos"} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
