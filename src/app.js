import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import AuthProvider from "./contexts/AuthContext";

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/signUp" element={<SignUpPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
