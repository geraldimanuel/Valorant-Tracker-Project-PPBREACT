import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<SearchPage />} />
				<Route path="/MainPage" element={<MainPage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
