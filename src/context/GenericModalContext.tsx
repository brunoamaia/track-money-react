import { createContext, ReactNode, useState } from 'react'

interface ModalProps {
	ModalContent: ReactNode
	title: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	confirmAction: any	// type: () => void
}

interface GenericModalContextProps {
	closeGenericModal: () => void,
	openGenericModal: ({ModalContent, title, confirmAction}: ModalProps) => void,
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
	const [handleConfirmAction, setHandleConfirmAction] = useState(() => undefined)
	const openGenericModal = ({ModalContent, title, confirmAction}: ModalProps) => {
		setHandleConfirmAction(confirmAction)
		setModalContent(ModalContent)
		setModalTitle(title)
		setShowModal(true)
	}
	const closeGenericModal = () => {
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
