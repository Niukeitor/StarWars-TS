import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Vehiculos() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				{" "}
				{store.vehicles.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta
								img={
									"https://db-api.elestimulo.com/app/uploads/2015/12/nave-star-wars-ub-feature-1-1100x572.jpg"
								}
								id={elemento.uid}
								nombre={elemento.name}
								baseurl={"/infoVehiculos"}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
