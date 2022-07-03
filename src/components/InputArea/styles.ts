import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.body};
	padding: 0 20px;
	margin: 20px 0;
`

export const Form = styled.form`
	display: flex;
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
		height: 30px;
		width: 130px;
	}
`

export const Input = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	
	label {
		font-weight: bold;
		height: 20px;
	}

	input {
		padding-left: 10px;
	}
	
	input, select {
		height: 30px;
		border: 1px solid #111;
		border-radius: 5px;
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text}
	}

	&:first-of-type {
		max-width: 130px;
	}

	&:nth-of-type(2) {
		max-width: 170px;
	}

	&:nth-of-type(3) input {
		padding-right: 10px;
	}
	
	&:last-of-type {
		max-width: 180px;
	}
`
