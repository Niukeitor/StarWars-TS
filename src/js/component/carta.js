import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Carta(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-12 col-md-4">
			<div className="card m-2" style={{ width: "18rem" }}>
				<img src={props.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>

					<Link to={`${props.baseurl}/${props.id}`}>
						<button className="btn btn-success">Mas Info</button>
					</Link>

					<button
						onClick={() => {
							actions.agregarFav(props.nombre);
						}}
						className="btn btn-warning mx-5">
						<i className="far fa-heart" />{" "}
					</button>
				</div>
			</div>
		</div>
	);
}
Carta.propTypes = {
	nombre: PropTypes.string,
	link: PropTypes.string,
	id: PropTypes.string,
	baseurl: PropTypes.string,
	favorito: PropTypes.string,
	img: PropTypes.string
};
