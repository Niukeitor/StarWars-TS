import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Carta(props) {
	return (
		<div className="card m-2" style={{ width: "18rem" }}>
			<img
				src="https://1.bp.blogspot.com/-Pon6rUimw6Q/XZc_GMLw7VI/AAAAAAAC-X4/OloOYgKbQCo1ZgbhxVMCQ6LM5gL-qcqoACLcBGAsYHQ/s1600/mj25.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<Link to={`${props.baseurl}/${props.id}`}>
					<button className="btn btn-success">Mas Info</button>
				</Link>
			</div>
		</div>
	);
}
Carta.propTypes = {
	nombre: PropTypes.string,
	link: PropTypes.string,
	id: PropTypes.string,
	baseurl: PropTypes.string
};
