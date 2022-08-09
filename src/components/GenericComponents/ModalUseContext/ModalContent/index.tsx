import ChildrenContent from './ChildrenContent'
import Footer from './Footer'
import Header from './Header'
import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function ModalContent() {
	const { dimensions } = useGenericModal()

	return (
		<Sty.ModalWrapper className={`height-${dimensions.height} width-${dimensions.width}`}>
			<Header />
			<ChildrenContent />
			<Footer />
		</Sty.ModalWrapper>
	)
}

export default ModalContent
