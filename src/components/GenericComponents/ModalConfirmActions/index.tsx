import ModalWrapper from '@/components/GenericComponents/ModalWrapper'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import * as Sty from './styles'

function ModalConfirmActions() {
	return (
		<ModalWrapper>
			<Sty.Container >
				<Header />
				<Body />
				<Footer />
			</Sty.Container>
		</ModalWrapper>
	)
}

export default ModalConfirmActions
