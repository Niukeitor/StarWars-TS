import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Vehiculos() {
	const { store, actions } = useContext(Context);
	return (
		<div className=" justify-content-between d-flex">
			{" "}
			{store.vehicles.map((elemento, index, array) => {
				return (
					<div key={index}>
						<Carta id={elemento.uid} nombre={elemento.name} baseurl={"/infoVehiculos"} />
					</div>
				);
			})}
		</div>
	);
}
