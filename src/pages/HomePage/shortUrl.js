import { useAuth } from "../../contexts/AuthContext";
import UrlFomr from "../../components/UrlInput";
import { useState } from "react";
import * as api from "../../service/urlApi";

export default function ShortlyUrl({ setUrls }) {
	const { token } = useAuth();
	const [link, setLink] = useState("");

	async function hadlerSubmit(e) {
		e.preventDefault();

		try {
			await api.shortlyUrl({ url: link }, token);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}

		return;
	}

	return (
		<UrlFomr onSubmit={(e) => hadlerSubmit(e)}>
			<input
				placeholder="Entre com sua url"
				type="url"
				name="url"
				value={link}
				onChange={(e) => setLink(e.target.value)}
			/>
			<button type="submit">Encurte seu Link</button>
		</UrlFomr>
	);
}
