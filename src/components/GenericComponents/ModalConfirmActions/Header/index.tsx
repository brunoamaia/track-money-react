import { useGenericModal } from '@/hooks/useGenericModal'
import closeIcon from '/x.svg'
import * as Sty from './styles'

function Header() {
	const { closeGenericModal, modalTitle } = useGenericModal()
	return (
		<Sty.Header >
			{ modalTitle }
			<Sty.CloseButton type="button" onClick={closeGenericModal}>
				<img src={closeIcon} />
			</Sty.CloseButton>
		</Sty.Header>
	)
}

export default Header
