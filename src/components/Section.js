import styled from "styled-components";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100px;
	width: 80%;

	border: 1px solid rgb(48 51 47 / 25%);
	border-radius: 12px;
	box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Section;
