import ModalContent from './ModalContent'
import * as Sty from './styles'

interface Props {
	isOpen: boolean
	modalTitle: string
	dimensions?: {
		height?: string
		width?: string
	}
	onChangeModalState: (newState: boolean) => void
	onConfirmModalAction: () => void
	children: JSX.Element
}

function Modal({ isOpen, modalTitle, dimensions, onChangeModalState, onConfirmModalAction, children }: Props) {
	const className = isOpen ? 'show-modal' : 'hide-modal'

	return (
		<Sty.ModalWrapper>
			<Sty.ModalBody className={className}>
				<ModalContent 
					onChangeModalState={onChangeModalState}
					onConfirmModalAction={onConfirmModalAction}
					modalTitle={modalTitle}
					dimensions={dimensions}
				>
					{ children }
				</ModalContent>
			</Sty.ModalBody>
		</Sty.ModalWrapper>
	)
}

export default Modal
