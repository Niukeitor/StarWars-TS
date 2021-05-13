import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export function Planetas() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="row">
				{" "}
				{store.planets.map((elemento, index, array) => {
					return (
						<div key={index}>
							<Carta
								img={"https://media.vandal.net/i/1088x1088/11-2019/2019112220511237_1.jpg"}
								id={elemento.uid}
								nombre={elemento.name}
								baseurl={"/infoPlanetas"}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
