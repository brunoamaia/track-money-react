import styled from 'styled-components'

export const Footer = styled.label`
	display: flex;
	width: 100%;
	justify-content: end;
	padding: 20px;
	gap: 10px;
	border-top: 1px solid ${(props) => props.theme.text};
`

export const CancelButton = styled.button`
	height: 40px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.text};
	background: ${(props) => props.theme.body};
	border: 1px solid ${(props) => props.theme.text};
	border-radius: 8px;
	cursor: pointer;
`

export const ConfirmButton = styled.button`
	height: 40px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.text};
	background: #007AFF;
	border: 1px solid #3187D5;
	border-radius: 8px;
	cursor: pointer;
`
