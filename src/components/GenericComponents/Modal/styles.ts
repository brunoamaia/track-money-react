import styled from 'styled-components'

export const ModalWrapper = styled.div`
	color: ${(props) => props.theme.text};
    font-weight: normal;
	
	.hide-modal {
		display: none;
		z-index: -1;
	}

	.show-modal {
		display: flex;
		z-index: 99999;
	}
`

export const ModalBody = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 99999;
`
