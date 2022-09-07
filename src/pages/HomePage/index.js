import { useEffect } from "react";
import Container from "../../components/center";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../../components/logoutButton";
import UrlFomr from "../../components/UrlInput";
import Section from "../../components/Section";
import Table from "../../components/table";

export default function HomePage() {
	const { token, logout } = useAuth();
	const navegate = useNavigate();

	useEffect(() => {
		if (!token) navegate("/");
	}, [token, navegate]);

	return (
		<Container>
			<LogoutButton onClick={() => logout()}>Logout</LogoutButton>
			<UrlFomr>
				<input placeholder="Entre com sua url" />
				<button>Encurte seu Link</button>
			</UrlFomr>
			<h2>Meus Links</h2>
			<Section>
				<Table id="customers">
					<tr>
						<th>Url Original</th>
						<th>Url Encurtada</th>
						<th>Data de Criação</th>
					</tr>
				</Table>
			</Section>
		</Container>
	);
}
