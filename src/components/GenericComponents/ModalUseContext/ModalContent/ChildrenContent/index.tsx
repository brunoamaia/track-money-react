import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function ChildrenContent() {
	const { modalContent } = useGenericModal()
	return (
		<Sty.ChildrenContent >
			{ modalContent }
		</Sty.ChildrenContent>
	)
}

ChildrenContent.displayName = 'components/GenericComponents/ModalUseContext/ModalContent/ChildrenContent'

export default ChildrenContent
