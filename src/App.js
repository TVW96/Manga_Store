import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.sass";
import Nav from "./Components/Nav";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
