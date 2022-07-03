import * as Sty from './styles'

interface Props {
	switchTheme: () => void;
}

function SwitchTheme({ switchTheme }: Props) {
	return (
		<Sty.Header>
			<Sty.SliderWrapper id="switch" className="switch">
				<input type="checkbox" onChange={switchTheme} id="slider" />
				<span className="slider round"></span>
			</Sty.SliderWrapper>
		</Sty.Header>
	)
}

export default SwitchTheme
