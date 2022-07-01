import styled from 'styled-components'

export const TableLine = styled.tr`
	td {
		border-left: 1px solid black;
		border-right: 1px solid black;

		&:first-child {
			border-left: none;
		}
		&:last-child {
			border-right: none;
		}
	}
`

export const TableColumn = styled.td`
	padding: 10px;
	text-align: left;
`

export const Category = styled.div<{color: string}>`
	border-radius: 5px;
	display: inline-block;
	padding: 5px 10px;
	color: #FFF;
	background-color: ${props => props.color};
`

export const Value = styled.div<{expense: boolean}>`
	color: ${props => props.expense ? 'red' : 'green'}
`
