import * as Sty from './styles'

interface Props {
	children: JSX.Element
}

function ChildrenContent({ children }: Props) {
	return (
		<Sty.ChildrenContent >
			{ children }
		</Sty.ChildrenContent>
	)
}

ChildrenContent.displayName = 'components/GenericComponents/Modal/ModalContent/ChildrenContent'

export default ChildrenContent
