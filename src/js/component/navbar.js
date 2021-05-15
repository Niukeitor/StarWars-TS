import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<Link to="/">
				<div>
					{" "}
					<img src="http://www.unioncosmos.com/wp-content/uploads/2016/05/union-cosmos-Star-Wars-png-transparente-300x165.png" />
				</div>
			</Link>
			<div className="container mx-5">
				<div className="ml-auto">
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-danger dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favoritos
						</button>
						<div className="dropdown-menu">
							{store.favorito.length > 0 ? (
								store.favorito.map((elemento, index, array) => {
									return (
										<a key={index} className="dropdown-item" href="#">
											{elemento}
										</a>
									);
								})
							) : (
								<a className="dropdown-item" href="#" />
							)}

							<div className="delet-button">
								{store.delFavorito > 0 ? (
									store.delFavorito.map((elemento, index, array) => {
										return (
											<a key={index} className="delete-button" href="#">
												{elemento}
											</a>
										);
									})
								) : (
									<i className="fas fa-trash" />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
