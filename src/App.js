import { Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { UserProvider } from "./lib/UserContext";

function App() {
	return (
		<UserProvider>
			<HashRouter>
				<Routes>
					<Route path="/" element={<SearchPage />} />
					<Route path="/MainPage" element={<MainPage />} />
				</Routes>
			</HashRouter>
		</UserProvider>
	);
}

export default App;
