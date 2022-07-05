import { useTheme } from '@/hooks/useTheme'
import * as Sty from './styles'

function SwitchTheme() {
	const { handleChangeTheme } = useTheme()

	return (
		<Sty.Header>
			<Sty.SliderWrapper id="switch" className="switch">
				<input type="checkbox" onChange={handleChangeTheme} id="slider"  />
				<span className="slider round"></span>
			</Sty.SliderWrapper>
		</Sty.Header>
	)
}

export default SwitchTheme
