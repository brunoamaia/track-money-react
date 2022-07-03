import styled from 'styled-components'

export const BodyWrapper = styled.div`
	height: calc(100vh - 200px);
	max-width: ${(props) => props.theme.commonStyles.width.desktopMaxSize};
	margin: -40px auto 0;
	margin-bottom: 50px;
	background-color: ${(props) => props.theme.body};
	box-shadow: 0px 0px 5px #000;
	border-radius: 10px;
	padding: 0;
	display: flex;
	flex-direction: column;
    align-items: center;
`
