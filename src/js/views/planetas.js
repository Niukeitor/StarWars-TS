import React, { useContext } from "react";
import { Carta } from "../component/carta";
import { Context } from "../store/appContext";
import { array } from "prop-types";
export function Planetas() {
	const { store, actions } = useContext(Context);
	return (
		<div className="justify-content-between d-flex">
			{" "}
			{store.planets.map((elemento, index, array) => {
				return <Carta key={elemento.uid} nombre={elemento.name} />;
			})}
		</div>
	);
}
