import closeIcon from '/x.svg'
import * as Sty from './styles'

interface Props {
	modalTitle: string
	onChangeModalState: (newState: boolean) => void
}

function Header({ modalTitle, onChangeModalState }: Props) {

	return (
		<Sty.Header >
			{ modalTitle }
			<Sty.CloseButton type="button" onClick={() => onChangeModalState(false)}>
				<img src={closeIcon} />
			</Sty.CloseButton>
		</Sty.Header>
	)
}

export default Header
