import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Carta(props) {
	return (
		<div className="card m-2" style={{ width: "18rem" }}>
			<img src={props.imagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<Link to={`/infoPersonajes/${props.id}`}>
					<button className="btn btn-success">Mas Info</button>
				</Link>
			</div>
		</div>
	);
}
Carta.propTypes = {
	nombre: PropTypes.string,
	imagen: PropTypes.string,
	link: PropTypes.string,
	id: PropTypes.string
};
