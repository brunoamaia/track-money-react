import * as Sty from './styles'
import { Link } from 'react-router-dom'
import SwitchTheme from '@/components/Header/SwitchTheme'
import icon from '/finance-icon.png'

interface Props {
	page: string;
	switchTheme: () => void;
}

function Finance({ page, switchTheme }: Props) {
	return (
		<Sty.Header>
			<Sty.SiteLogoWrapper>
				<Link to={'/'}>
					<Sty.Figure>
						<img src={icon} />
					</Sty.Figure>
				</Link>
				<div>
					Sistema Financeiro
				</div>
			</Sty.SiteLogoWrapper>
			<Sty.HeaderText>
				{ page }
			</Sty.HeaderText>
			<Sty.SwitchToggle>
				<SwitchTheme switchTheme={switchTheme} />
			</Sty.SwitchToggle>
		</Sty.Header>
	)
}

export default Finance
