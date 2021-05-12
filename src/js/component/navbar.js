import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<Link to="/">
				<div>
					{" "}
					<img src="http://www.unioncosmos.com/wp-content/uploads/2016/05/union-cosmos-Star-Wars-png-transparente-300x165.png" />
				</div>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-danger dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favoritos
						</button>
						<div className="dropdown-menu" />
					</div>
				</Link>
			</div>
		</nav>
	);
};
