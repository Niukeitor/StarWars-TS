import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";
import { array } from "prop-types";
export function Personajes() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container justify-content-between d-flex">
			{" "}
			{store.people.map((elemento, index, array) => {
				return <Carta key={elemento.uid} nombre={elemento.name} />;
			})}
		</div>
	);
}