import styled from "styled-components";

const Table = styled.table`
	border-collapse: collapse;
	width: 100%;

	border-radius: 12px;

	tr,
	th {
		border-radius: 12px;
		border: 1px solid #ddd;
		border-radius: 12px;
		padding: 8px;
	}

	tr {
		:nth-child(even) {
			background-color: #f2f2f2;
		}
		:hover {
			background-color: #ddd;
		}
	}

	th {
		border-radius: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: white;

		:first-child {
			border-radius: 12px 0 0 12px;
		}
		:nth-child(2) {
			border-radius: 0;
		}
		:nth-child(3) {
			border-radius: 0 12px 12px 0;
		}
	}
`;

export default Table;
