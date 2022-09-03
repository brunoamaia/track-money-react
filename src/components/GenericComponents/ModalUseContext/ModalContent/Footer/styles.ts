import styled from 'styled-components'

export const Footer = styled.div`
	display: flex;
	width: 100%;
	justify-content: end;
	padding: 20px;
	gap: 10px;
	border-top: 1px solid ${(props) => props.theme.text} !important;
`

export const CancelButton = styled.button`
	height: 40px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.text} !important;
	background: ${(props) => props.theme.body} !important;
	border: 1px solid ${(props) => props.theme.text} !important;
	border-radius: 8px;
	cursor: pointer;
`

export const ConfirmButton = styled.button`
	height: 40px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.text} !important;
	background: #007AFF !important;
	border: 1px solid #3187D5 !important;
	border-radius: 8px;
	cursor: pointer;
`
