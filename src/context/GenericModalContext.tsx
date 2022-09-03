import { createContext, ReactNode, useState } from 'react'
import { medium } from '@/constants/styles/dimensions'

interface ModalProps {
	dimensions: {
		height: string
		width: string
	}
	title: string
	nameConfirmAction?: string
	ModalContent: ReactNode
}

interface GenericModalContextProps {
	closeGenericModal: () => void,
	openGenericModal: ({dimensions, title, nameConfirmAction, ModalContent}: ModalProps) => void,
	dimensions: {
		height: string
		width: string
	}
	handleConfirmAction: boolean
	modalContent: ReactNode,
	nameConfirmAction?: string
	modalTitle: string,
	startConfirmAction: () => void
	finishConfirmAction: () => void
	showModal: boolean
}

export const GenericModalContext = createContext({} as GenericModalContextProps)

interface ModalStateProps {
	children: ReactNode
}

export function GenericModalContextProvider({ children }: ModalStateProps) {
	const [showModal, setShowModal] = useState(false)
	const [modalContent, setModalContent] = useState<ReactNode>()
	const [modalTitle, setModalTitle] = useState('')
	const [nameConfirmAction, setNameConfirmAction] = useState<string | undefined>('')
	const [dimensions, setDimensions] = useState({height: medium, width: medium})
	const [handleConfirmAction, setHandleConfirmAction] = useState(false)

	const openGenericModal = ({dimensions, ModalContent, title, nameConfirmAction}: ModalProps) => {
		console.log('Modal context: open')
		setDimensions(dimensions)
		setModalContent(ModalContent)
		setNameConfirmAction(nameConfirmAction)
		setModalTitle(title)
		setShowModal(true)
	}
	const closeGenericModal = () => {
		console.log('Modal context: close')
		setModalContent('')
		setModalTitle('')
		setNameConfirmAction('')
		setShowModal(false)
	}

	const startConfirmAction = () => {
		console.log('confirmar')
		setHandleConfirmAction(true)
	}
	const finishConfirmAction = () => {
		console.log('deu boa')
		closeGenericModal()
		setHandleConfirmAction(false)
	}

	return (
		<GenericModalContext.Provider 
			value={{
				closeGenericModal,
				openGenericModal,
				startConfirmAction,
				finishConfirmAction,
				dimensions,
				handleConfirmAction,
				modalContent,
				showModal,
				nameConfirmAction,
				modalTitle
			}}
		>
			{ children }
		</GenericModalContext.Provider>
	)
}
