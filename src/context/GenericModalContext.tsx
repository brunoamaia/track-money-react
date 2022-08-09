import { createContext, ReactNode, useState } from 'react'
import { medium } from '@/constants/styles/dimensions'

interface ModalProps {
	dimensions: {
		height: string
		width: string
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	confirmAction: any	// type: () => void
	title: string
	ModalContent: ReactNode
}

interface GenericModalContextProps {
	closeGenericModal: () => void,
	openGenericModal: ({dimensions, title, confirmAction, ModalContent}: ModalProps) => void,
	dimensions: {
		height: string
		width: string
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleConfirmAction: any	// type: () => void
	modalContent: ReactNode,
	modalTitle: string,
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
	const [dimensions, setDimensions] = useState({height: medium, width: medium})
	const [handleConfirmAction, setHandleConfirmAction] = useState(() => undefined)
	const openGenericModal = ({dimensions, ModalContent, title, confirmAction}: ModalProps) => {
		console.log('Modal context: open')
		setDimensions(dimensions)
		setHandleConfirmAction(confirmAction)
		setModalContent(ModalContent)
		setModalTitle(title)
		setShowModal(true)
	}
	const closeGenericModal = () => {
		console.log('Modal context: close')
		setHandleConfirmAction(() => undefined)
		setModalContent('')
		setModalTitle('')
		setShowModal(false)
	}

	return (
		<GenericModalContext.Provider 
			value={{
				closeGenericModal,
				openGenericModal,
				dimensions,
				handleConfirmAction,
				modalContent,
				showModal,
				modalTitle
			}}
		>
			{ children }
		</GenericModalContext.Provider>
	)
}
