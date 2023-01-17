import styled from 'styled-components'

export const Container = styled.div`
	background-color: ${(props) => props.theme.body};
	padding: 0 20px;
	margin: 20px 0;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: initial;
	justify-content: space-between;
	flex: 1;
	gap: 10px;

	button {
		color: white;
		margin-top: 20px;
		border: 1px solid #333;
		border-radius: 5px;
		background-color: #33D;
		height: 40px;
		width: 130px;
	}
`

export const Input = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	width: 100%;
	height: 40px;
	
	label {
		font-weight: bold;
		height: 20px;
		padding-right: 10px;
	}

	input, select, select option {
		height: 35px;
		padding: 0 10px;
		border: 1px solid #111;
		border-radius: 5px;
		width: 100%;
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text};
	}
`
