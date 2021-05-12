import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function InfoPlanetas(props) {
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
		<div className="container justyfi-content-center">
			<div className="card mb-3" style={{ maxWidth: "620px" }}>
				<div className="row no-gutters">
					<div className="col-md-4">
						<img
							style={{ maxWidth: "100%" }}
							src="https://smoda.elpais.com/wp-content/uploads/2019/12/2-look-750x702.jpg"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<ul>
								<li>Nombre: {info.name}</li>
								<li>Altura: {info.rotation_period}</li>
								<li>Altura: {info.orbital_period}</li>
								<li>Altura: {info.diameter}</li>
								<li>Altura: {info.climate}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

InfoPlanetas.PropTypes = {
	nombre: PropTypes.string
};
