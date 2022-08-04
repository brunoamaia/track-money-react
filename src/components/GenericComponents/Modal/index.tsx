import ModalContent from './ModalContent'
import * as Sty from './styles'

interface Props {
	isOpen: boolean
	modalTitle: string
	onChangeModalState: (newState: boolean) => void
	onConfirmModalAction: () => void
	children: JSX.Element
}

function Modal({ isOpen, modalTitle, onChangeModalState, onConfirmModalAction, children }: Props) {
	const className = isOpen ? 'show-modal' : 'hide-modal'

	return (
		<Sty.ModalWrapper>
			<Sty.ModalBody className={className}>
				<ModalContent 
					onChangeModalState={onChangeModalState}
					onConfirmModalAction={onConfirmModalAction}
					modalTitle={modalTitle}
				>
					{ children }
				</ModalContent>
			</Sty.ModalBody>
		</Sty.ModalWrapper>
	)
}

export default Modal
