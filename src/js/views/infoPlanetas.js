import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function InfoPlanetas(props) {
	const [info, setInfo] = useState({});
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		fetch(store.planets[id - 1].url)
			.then(resp => resp.json())
			.then(data => setInfo(data.result.properties))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="https://www.laguiadelvaron.com/wp-content/uploads/2016/12/s-media-cache-ak0.pinimg.com-cc400d4a208e553f11e7931354fa3311.gif"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">{info.name}</h5>
					<ul>
						<li>Nombre: {info.name}</li>
						<li>Rotacion: {info.rotation_period}</li>
						<li>Orbita: {info.orbital_period}</li>
						<li>Diametro: {info.diameter}</li>
						<li>Clima: {info.climate}</li>
						<li>Gravedad: {info.gravity}</li>
						<li>Terreno: {info.terrain}</li>
						<li>Superficie del agua: {info.surface_water}</li>
						<li>Popularidad: {info.population}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

InfoPlanetas.PropTypes = {
	nombre: PropTypes.string
};
