import { Link } from 'react-router-dom'
import SwitchTheme from '@/components/Header/SwitchTheme'
import icon from '/finance-icon.png'
import * as Sty from './styles'

interface Props {
	page: string;
}

function Finance({ page }: Props) {
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
				<SwitchTheme />
			</Sty.SwitchToggle>
		</Sty.Header>
	)
}

export default Finance
