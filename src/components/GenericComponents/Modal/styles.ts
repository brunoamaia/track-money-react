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

	.height-xx-small { height: 300px; }
	.height-x-small { height: 400px; }
	.height-small { height: 400px; }
	.height-medium { height: 500px; }
	.height-large { height: 600px; }
	.height-x-large { height: 700px; }
	.height-xx-large { height: 800px; }

	.width-xx-small { width: 400px; }
	.width-x-small { width: 500px; }
	.width-small { width: 600px; }
	.width-medium { width: 700px; }
	.width-large { width: 800px; }
	.width-x-large { width: 900px; }
	.width-xx-large { width: 950px; }
`
