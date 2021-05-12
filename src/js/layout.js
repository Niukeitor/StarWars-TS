import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { InfoPersonajes } from "./views/infoPersonaje";
import { InfoPlanetas } from "./views/infoPlanetas";
import { InfoVehiculos } from "./views/infoVehiculos";

import { Personajes } from "./views/personajes";
import { Planetas } from "./views/planetas";
import { Vehiculos } from "./views/vehiculos";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/infoPlanetas/:id">
							<InfoPlanetas />
						</Route>
						<Route exact path="/infoVehiculos/:id">
							<InfoVehiculos />
						</Route>
						<Route exact path="/infoPersonajes/:id">
							<InfoPersonajes />
						</Route>
						<Route exact path="/peoples">
							<Personajes />
						</Route>
						<Route exact path="/planets">
							<Planetas />
						</Route>
						<Route exact path="/vehiculos">
							<Vehiculos />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
