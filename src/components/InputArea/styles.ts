import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: #BBB;
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
	
	input, select {
		height: 30px;
		border: 1px solid;
		border-radius: 5px;
		background-color: #DDD;
	}
`
