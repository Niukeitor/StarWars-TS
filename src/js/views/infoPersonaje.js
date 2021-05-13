import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function InfoPersonajes(props) {
	const [info, setInfo] = useState({});
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(() => {
		fetch(store.people[id - 1].url)
			.then(resp => resp.json())
			.then(data => setInfo(data.result.properties))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="container">
			<div className="card bg-dark text-white">
				<img
					src="https://as.com/meristation/imagenes/2019/11/21/noticias/1574336961_955124_1574337025_noticia_normal.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{info.name}</h5>
							<div className="container">
								<ul>
									<li>Nombre: {info.name}</li>
									<li>Altura: {info.height}</li>
									<li>Peso: {info.mass}</li>
									<li>Color de Pelo: {info.hair_color}</li>
									<li>Color de Piel: {info.skin_color}</li>
									<li>Color de Ojos: {info.eye_color}</li>
									<li>Año de Nacimiento: {info.birth_year}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

InfoPersonajes.propTypes = {
	nombre: PropTypes.string
};
