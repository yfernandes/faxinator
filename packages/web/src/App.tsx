import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store/rootReducer";
import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
