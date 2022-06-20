import * as Sty from './styles'
import { Link } from 'react-router-dom'
import icon from '/finance-icon.png'

interface Props {
	page: string
}

function Finance({page}: Props) {
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
		</Sty.Header>
	)
}

export default Finance
