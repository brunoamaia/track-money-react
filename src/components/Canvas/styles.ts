import styled from 'styled-components'

export const Canvas = styled.canvas`
	background-color: ${(props) => props.theme.text};
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
