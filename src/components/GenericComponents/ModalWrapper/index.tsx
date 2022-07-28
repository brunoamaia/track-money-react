import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

interface Props {
	children: JSX.Element;
}

function ModalWrapper({ children }: Props) {
	const { showModal } = useGenericModal()
	const className = showModal ? 'show-modal' : 'hide-modal'

	return (
		<Sty.ModalWrapper>
			<Sty.ModalContent className={className}>
				<Sty.Container >
					{ children }
				</Sty.Container>
			</Sty.ModalContent>
		</Sty.ModalWrapper>
	)
}

export default ModalWrapper
