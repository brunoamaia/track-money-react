import { useState } from 'react'
import { Link } from 'react-router-dom'
import SwitchTheme from '@/components/Header/SwitchTheme'
import Modal from '@/components/GenericComponents/Modal'
import icon from '/finance-icon.png'
import * as Sty from './styles'

interface Props {
	page: string;
}

function Finance({ page }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const confirmAction = () => console.log('Salvar')
	const onChangeModalState = (newState: boolean) => setIsOpen(newState)

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
				<button type="button" onClick={() => onChangeModalState(true)}>
					Modal
				</button>
				<Modal
					isOpen={isOpen}
					modalTitle={'Cabeçalho'}
					onChangeModalState={onChangeModalState}
					onConfirmModalAction={confirmAction}
				>
					<div>Conteúdo</div>
				</Modal>
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
