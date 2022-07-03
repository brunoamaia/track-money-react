import styled from 'styled-components'

export const Header = styled.div`
	display: flex;
	width: 40px;
	height: 15px;
	background: var(--color-secondary);
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const SliderWrapper = styled.label`
	.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #333;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	}

	.slider:before {
	position: absolute;
	content: "";
	height: 20px;
	width: 20px;
	left: 0px;
	bottom: 4px;
	top: 0;
	bottom: 0;
	margin: auto 0;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	box-shadow: 0 0px 15px #2020203d;
	background: white url('https://i.ibb.co/FxzBYR9/night.png');
	background-repeat: no-repeat;
	background-position: center;
	}

	input:checked + .slider {
	background-color: #2196f3;
	}

	input:focus + .slider {
	box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
	-webkit-transform: translateX(24px);
	-ms-transform: translateX(24px);
	transform: translateX(24px);
	background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
	background-repeat: no-repeat;
	background-position: center;
	}

	/* Rounded sliders */
	.slider.round {
	border-radius: 34px;
	}

	.slider.round:before {
	border-radius: 50%;
	}
`
