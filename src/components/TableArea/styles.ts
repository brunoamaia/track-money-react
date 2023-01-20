import styled from 'styled-components'

export const Table = styled.table`
	width: 100%;
	background-color: ${(props) => props.theme.tableBodyDark};
	padding: 0;
	margin: 10px 0;
	border-radius: 10px;
	border-collapse: collapse;

	td, tr {
		max-height: 20px;
		margin: 10px;

		&:nth-child(1) {
			border-left: 2px solid black;
			width: 100px;
		}
		&:nth-child(2) {
			border-left: 1px solid black;
			border-right: 1px solid black;
			width: 130px;
		}
		&:nth-child(3) {
			border-right: 1px solid black;
			width: auto;
		}
		&:nth-child(4) {
			border-right: 2px solid black;
			width: 150px;
		}
	}
`
export const TableHeadColumn = styled.th`
	padding: 10px;
	text-align: left;
	background-color: ${(props) => props.theme.tableHeader};
	border-top: 2px solid black;
	border-bottom: 2px solid black;
	
	&:nth-child(2) {
		border-left: 1px solid black;
		border-right: 1px solid black;
	}
	&:nth-child(3) {
		border-right: 1px solid black;
	}
	&:nth-child(4) {
		border-right: 2px solid black;
	}
`

export const TableBody = styled.tbody`
	.odd {
		background-color: ${(props) => props.theme.tableBodyLight};
	}

	.even {
		background-color: ${(props) => props.theme.tableBodyDark};
	}

	.lastLine {
		border-bottom: 2px solid black;
	}
`
