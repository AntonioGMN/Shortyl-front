import Container from "../../components/center";
import { Form, Button, Line } from "../../components/form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import * as api from "../../service/apiService.js";

export default function LoginPage() {
	const { token } = useAuth();
	const navegate = useNavigate();
	const { persistLogin } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (token) navegate("home");
	}, [token, navegate]);

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const user = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const response = await api.login(user);
			const token = response.data;
			console.log(token);
			persistLogin(token);
			navegate("/home");
		} catch (error) {
			console.log(error);
		}

		return;
	}
	return (
		<Container>
			<Form onSubmit={(e) => hadlerSubmit(e)}>
				<input
					placeholder="Email"
					type="email"
					name="email"
					value={formData.email}
					onChange={(e) => handlerInput(e)}
				/>
				<input
					placeholder="Senha"
					type="password"
					name="password"
					value={formData.password}
					onChange={(e) => handlerInput(e)}
				/>
				<Button type="submit">Entrar</Button>
				<Line />
				<Button type="text" onClick={() => navegate("/signUp")}>
					Cadastre-se
				</Button>
			</Form>
		</Container>
	);
}
