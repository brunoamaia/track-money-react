import styled from "styled-components"

export const Table = styled.table`
	width: 100%;
	background-color: #FFF;
	padding: 20px;
	box-shadow: 0 0 5px #CCC;
	border-radius: 10px;
	margin-top: 20px;

`
export const TableHeadColumn = styled.th`
	padding: 10px;
	text-align: left;
	
	&:nth-child(1) {
       width: 100px;
    }
	&:nth-child(2) {
       width: 130px;
    }
	&:nth-child(3) {
       width: auto;
    }
	&:nth-child(4) {
       width: 150px;
    }
`
