import { useEffect } from "react";
import Container from "../../components/center";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../../components/logoutButton";
import Section from "../../components/Section";
import Table from "../../components/table";
import * as api from "../../service/urlApi";
import { useState } from "react";
import ShortlyUrl from "./shortUrl";
import H1 from "../../components/h1";

export default function HomePage() {
	const { token, logout } = useAuth();
	const [urls, setUrls] = useState(null);
	const navegate = useNavigate();

	useEffect(() => {
		if (!token) navegate("/");
		async function getUrls() {
			const response = await api.getAll(token);
			setUrls(response.data);
			return;
		}
		getUrls();
	}, [token, navegate, setUrls, urls]);

	return (
		<Container>
			<LogoutButton onClick={() => logout()}>Logout</LogoutButton>
			<ShortlyUrl setUrls={setUrls} />
			<Section>
				{urls === null ? (
					"carregando"
				) : urls.length === 0 ? (
					<H1>Encurte sua primeira url</H1>
				) : (
					<>
						<H1>Meus Links</H1>
						<Table id="customers">
							<thead>
								<tr>
									<th>Url Original</th>
									<th>Url Encurtada</th>
									<th>Data de Criação</th>
								</tr>
							</thead>
							<tbody>
								{urls.map((date) => (
									<tr key={date.id}>
										<th>{date.url}</th>
										<th>
											<a
												href={date.shorturl}
												target="_blank"
												rel="noopener noreferrer"
												alt="errp"
											>
												{date.shorturl}
											</a>
										</th>
										<th>{date.created}</th>
									</tr>
								))}
							</tbody>
						</Table>
					</>
				)}
			</Section>
		</Container>
	);
}
