import React from "react";

export function InfoVehiculos(props) {
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
							<h5 className="card-title">Luke Skywalker</h5>
							<p className="card-text">Info detallada sobre vehiculo</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
