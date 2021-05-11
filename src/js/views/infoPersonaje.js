import React from "react";

export function InfoPersonajes() {
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
							<p className="card-text">
								Luke Skywalker fue un humano sensible a la Fuerza y un Maestro Jedi quien, junto a su
								hermana gemela, la Princesa Leia Organa, luchó en contra del gobierno del Imperio
								Galáctico durante la Guerra Civil Galáctica. Hijo del Caballero Jedi Anakin Skywalker y
								de la Senadora Padmé Amidala de Naboo, Luke nació poco después del final de la Guerras
								Clon el 19 ABY.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
