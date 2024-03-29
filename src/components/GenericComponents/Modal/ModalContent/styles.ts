import styled from 'styled-components'

export const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 500px;
	height: 500px;
	background: ${(props) => props.theme.body};
	border-radius: 20px;
`
