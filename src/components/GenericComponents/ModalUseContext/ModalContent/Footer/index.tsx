import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function Footer() {
	const { closeGenericModal, startConfirmAction, nameConfirmAction } = useGenericModal()
	const ConfirmButtonLabel = nameConfirmAction !== '' ? nameConfirmAction : 'Confirmar'

	return (
		<Sty.Footer >
			<Sty.CancelButton onClick={closeGenericModal}>{ 'Cancel' }</Sty.CancelButton>
			<Sty.ConfirmButton onClick={startConfirmAction}>{ ConfirmButtonLabel }</Sty.ConfirmButton>
		</Sty.Footer>
	)
}

Footer.displayName = 'components/GenericComponents/ModalUseContext/ModalContent/Footer'

export default Footer
