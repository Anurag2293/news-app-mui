import "./App.css"
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route exact path="/" element={<News type="general"/>} />
				<Route exact path="/sports" element={<News type="sports"/>} />
				<Route exact path="/entertainment" element={<News type="entertainment"/>} />
				<Route exact path="/movies" element={<News type="movies"/>} />
			</Routes>
		</>
	);
}

export default App;
