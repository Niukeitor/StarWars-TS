import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";
import { array } from "prop-types";
export function InfoPlanets() {
	const { store, actions } = useContext(Context);
	return (
		<div className=" justify-content-between d-flex">
			{" "}
			{store.vehicle.map((elemento, index, array) => {
				return <Carta key={elemento.uid} nombre={elemento.url} />;
			})}
		</div>
	);
}
