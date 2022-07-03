import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: ${(props) => props.theme.body};
	padding: 5px 10px;
	border: 2px solid black;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
    align-items: center;
`

export const MonthArea = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const MonthArrow = styled.button`
	display: flex;
	align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 40px;
	height: 30px;
    text-align: center;
	color: white;
	background-color: #0078D7;
	border: 2px solid #333;
	border-radius: 5px;
    cursor: pointer;

	&:focus {
		outline: none;
	}
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`
