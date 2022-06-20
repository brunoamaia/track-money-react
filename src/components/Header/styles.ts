import styled from 'styled-components'

export const Header = styled.div`
	height: 150px;
	background-color: darkblue;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-weight: bold;
`

export const SiteLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 10px;
	padding: 10px;
	color: #32B04A;
`

export const Figure = styled.figure`
	height: 50px;
	width: 50px;

	img {
		width: 100%;
	}
`

export const HeaderText = styled.h1`
	height: 100%;
	width: 100%;
	margin-top: -10px;
	color: #FFF;
`
