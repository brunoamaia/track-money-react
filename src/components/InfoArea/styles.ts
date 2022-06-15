import styled from "styled-components"

export const Container = styled.div`
	background-color: #BBB;
	box-shadow: 0px 0px 5px #000;
	border-radius: 10px;
	padding: 20px;
	margin-top: -40px;
	display: flex;
    align-items: center;
`
export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.button`
	display: flex;
	align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 40px;
	height: 30px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
	color: white;
	background-color: #0078D7;
	border: 2px solid #333;
	border-radius: 5px;

	&:focus {
		outline: none;
	}
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;
