import ChildrenContent from './ChildrenContent'
import Footer from './Footer'
import Header from './Header'
import { medium } from '@/constants/styles/dimensions'
import * as Sty from './styles'

interface Props {
	modalTitle: string
	dimensions?: {
		height?: string
		width?: string
	}
	onChangeModalState: (newState: boolean) => void
	onConfirmModalAction: () => void
	children: JSX.Element
}

function ModalContent({ modalTitle, dimensions, onChangeModalState, onConfirmModalAction, children }: Props) {
	const height = dimensions && dimensions.height || medium
	const width = dimensions && dimensions.width || medium

	return (
		<Sty.ModalWrapper className={`height-${height} width-${width}`}>
			<Header modalTitle={modalTitle} onChangeModalState={onChangeModalState}/>
			<ChildrenContent>
				{ children }
			</ChildrenContent>
			<Footer onChangeModalState={onChangeModalState} onConfirmModalAction={onConfirmModalAction}/>
		</Sty.ModalWrapper>
	)
}

ModalContent.displayName = 'components/GenericComponents/Modal/ModalContent'

export default ModalContent
