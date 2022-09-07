import Container from "../../components/center";
import { Form, Button, Line } from "../../components/form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as api from "../../service/apiService.js";

export default function SignUpPage() {
	const navegate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			alert("As senha são diferentes");
			return;
		}

		const user = {
			email: formData.email,
			password: formData.password,
		};

		try {
			const resonse = await api.signUp(user);
			console.log(resonse);
			navegate("/");
		} catch (error) {
			console.log(error);
		}

		return;
	}

	return (
		<Container>
			<Form onSubmit={(e) => hadlerSubmit(e)}>
				<input
					placeholder="Nome"
					type="text"
					name="name"
					value={formData.name}
					onChange={(e) => handlerInput(e)}
				/>
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
				<input
					placeholder="Confirme Senha"
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={(e) => handlerInput(e)}
				/>
				<Button>Cadastre-se</Button>
				<Line />
				<Button type="text" onClick={() => navegate("/")}>
					Ir para o login
				</Button>
			</Form>
		</Container>
	);
}
