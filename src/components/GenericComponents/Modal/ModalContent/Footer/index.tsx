import * as Sty from './styles'

interface Props {
	onChangeModalState: (newState: boolean) => void
	onConfirmModalAction: () => void
}

function Footer({onChangeModalState, onConfirmModalAction}: Props) {
	return (
		<Sty.Footer >
			<Sty.CancelButton onClick={() => onChangeModalState(false)}>{ 'Cancel' }</Sty.CancelButton>
			<Sty.ConfirmButton onClick={() => onConfirmModalAction()}>{ 'Confirmar' }</Sty.ConfirmButton>
		</Sty.Footer>
	)
}

export default Footer
