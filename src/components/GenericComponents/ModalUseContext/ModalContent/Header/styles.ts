import styled from 'styled-components'

export const Header = styled.div`
	position: relative;
	width: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${(props) => props.theme.text};
`

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 20px;
	display: flex;
	background: ${(props) => props.theme.body} !important;
	border: none !important;
	cursor: pointer;
`
