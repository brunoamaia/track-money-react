import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import SwitchTheme from '@/components/Header/SwitchTheme'
import { useGenericModal } from '@/hooks/useGenericModal'
import icon from '/finance-icon.png'
import * as Sty from './styles'

interface Props {
	page: string;
}

function Finance({ page }: Props) {
	const { openGenericModal } = useGenericModal()
	const ModalContent = <div>Corpo</div>
	const title = 'Editar conteúdo'
	const handleSave = useCallback(() => console.log('Salvar'), [])
	const modalParameters = {
		ModalContent,
		title,
		confirmAction: () => handleSave
	}
	const habilitar = () => {
		openGenericModal(modalParameters)
	}

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
				<button type="button" onClick={habilitar}>
					Modal
				</button>
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
