import React from "react";
import { Carta } from "../component/carta";
export function Planetas() {
	return (
		<div className="container justify-content-between d-flex">
			{" "}
			<Carta
				nombre="Tatooine"
				imagen="http://4.bp.blogspot.com/-IUO_O-bojLM/TWE3Iy01V4I/AAAAAAAAA_w/UaPdiVYWbgo/s1600/Star+Wars+-+Tattoine+09.jpg"
			/>
			<Carta nombre="Alderaan" imagen="https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg" />
			<Carta nombre="Yavin IV" imagen="https://static.wikia.nocookie.net/esstarwars/images/a/a0/Eaw_Yavin4.jpg" />
		</div>
	);
}
