import styled from "styled-components";

const UrlFomr = styled.form`
	display: flex;
	flex-direction: flex;
	justify-content: center;
	align-items: center;
	min-height: 100px;
	width: 80%;

	input {
		all: unset;

		width: 100%;
		height: 52px;

		color: #000;
		font-size: 18px;
		padding-left: 7px;

		background: #ffffff;
		border: 1px solid rgb(48 51 47 / 25%);
		border-radius: 12px;
		box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

		::placeholder {
			color: #9c9c9c;
			font-family: "Lexend Deca", sans-serif;
		}
	}

	button {
		all: unset;
		border-radius: 12px;

		width: 100px;
		height: 52px;

		font-style: normal;
		font-size: 14px;
		font-weight: 700;
		line-height: 18px;
		text-align: center;
		color: #ffffff;

		background: #04aa6d;
		border-radius: 12px;
	}

	@media (max-width: 700px) {
		width: 100%;
		flex-direction: column;
		gap: 10px;
		margin-top: 50px;

		button {
			width: 100%;
		}
	}
`;

export default UrlFomr;
