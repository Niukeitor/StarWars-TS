import React from "react";
import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="container justify-content-between d-flex">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2020/05/star-wars-nueva-esperanza-1933847.jpg?itok=MxEefdoy"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Personajes</h5>
					<p className="card-text">
						Aqui podra encontrar toda la informacion sobre los perosonajes de la trama.
					</p>
					<Link to="/peoples">
						<button className="btn btn-primary">Mas informacion</button>
					</Link>
				</div>
			</div>

			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://www.gamerfocus.co/wp-content/uploads/2019/11/planetas_fallen_order.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Planetas</h5>
					<p className="card-text">
						Aqui podra encontrar toda la informacion sobre los planetas de la trama.
					</p>
					<Link to="/planets">
						<button className="btn btn-primary">Mas informacion</button>
					</Link>
				</div>
			</div>

			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://vdmedia.elpais.com/elpaistop/20202/29/2019121992148149_1582990136_asset_still.png"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Vehiculos</h5>
					<p className="card-text">
						Aqui podra encontrar toda la informacion sobre los vehiculos de la trama.
					</p>
					<Link to="/vehiculos">
						<button className="btn btn-primary">Mas informacion</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
