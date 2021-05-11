import React from "react";
import { Carta } from "../component/carta";
export function Vehiculos() {
	return (
		<div className="container justify-content-between d-flex">
			{" "}
			<Carta
				nombre="Millennium Falcon"
				imagen="https://wwwhatsnew.com/wp-content/uploads/2019/12/jared-owen-lanza-video-de-tour-virtual-millenium-falcon-star-wars.jpg"
			/>
			<Carta nombre="Y-wing" imagen="https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg" />
			<Carta
				nombre="Death Star"
				imagen="https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg"
			/>
		</div>
	);
}
