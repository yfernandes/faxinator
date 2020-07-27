import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";

import Home from "./pages/Home";

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
