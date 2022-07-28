import { useGenericModal } from '@/hooks/useGenericModal'
import * as Sty from './styles'

function Body() {
	const { modalContent } = useGenericModal()
	return (
		<Sty.BodyContent >
			{ modalContent }
		</Sty.BodyContent>
	)
}

export default Body
