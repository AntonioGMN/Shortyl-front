import { useAuth } from "../../contexts/AuthContext";
import UrlFomr from "../../components/UrlInput";
import { useState } from "react";

export default function ShortlyUrl() {
	const { token } = useAuth();
	const [url, setUrl] = useState("");

	function handlerInput(e) {
		seturl({ ...url, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

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
		<UrlFomr>
			<input placeholder="Entre com sua url" />
			<button>Encurte seu Link</button>
		</UrlFomr>
	);
}
