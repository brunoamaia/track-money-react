import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function Footer() {
	const { closeGenericModal, handleConfirmAction } = useGenericModal()

	return (
		<Sty.Footer >
			<Sty.CancelButton onClick={closeGenericModal}>{ 'Cancel' }</Sty.CancelButton>
			<Sty.ConfirmButton onClick={handleConfirmAction}>{ 'Confirmar' }</Sty.ConfirmButton>
		</Sty.Footer>
	)
}

export default Footer
