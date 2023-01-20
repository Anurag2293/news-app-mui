import "./App.css"
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route exact path="/" element={<News key="general" category="general" />} />
				<Route exact path="/sports" element={<News key="sports" category="sports"/>} />
				<Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>} />
				<Route exact path="/movies" element={<News key="movies" category="movies"/>} />
			</Routes>
		</>
	);
}

export default App;
