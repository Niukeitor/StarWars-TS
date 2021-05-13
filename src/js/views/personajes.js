import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Personajes() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row">
				{" "}
				{store.people.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta
								img={"https://www.mundopeliculas.tv/wp-content/uploads/2021/04/star-wars-1.jpg"}
								id={elemento.uid}
								nombre={elemento.name}
								baseurl={"/infoPersonajes"}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
