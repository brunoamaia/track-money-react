import ChildrenContent from './ChildrenContent'
import Footer from './Footer'
import Header from './Header'
import * as Sty from './styles'

interface Props {
	modalTitle: string
	onChangeModalState: (newState: boolean) => void
	onConfirmModalAction: () => void
	children: JSX.Element
}

function ModalContent({ modalTitle, onChangeModalState, onConfirmModalAction, children }: Props) {
	return (
		<Sty.ModalWrapper>
			<Header modalTitle={modalTitle} onChangeModalState={onChangeModalState}/>
			<ChildrenContent>
				{ children }
			</ChildrenContent>
			<Footer onChangeModalState={onChangeModalState} onConfirmModalAction={onConfirmModalAction}/>
		</Sty.ModalWrapper>
	)
}

export default ModalContent
