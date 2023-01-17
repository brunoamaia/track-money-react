import ModalContent from './ModalContent'
import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function ModalUseContext() {
	const { showModal } = useGenericModal()
	const className = showModal ? 'show-modal' : 'hide-modal'

	return (
		<Sty.ModalWrapper>
			<Sty.ModalBody className={className}>
				<ModalContent />
			</Sty.ModalBody>
		</Sty.ModalWrapper>
	)
}

ModalUseContext.displayName = 'components/GenericComponents/ModalUseContext'

export default ModalUseContext
