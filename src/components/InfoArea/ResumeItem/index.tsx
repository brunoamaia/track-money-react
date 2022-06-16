import * as Sty from './styles'

interface Props {
	color?: string;
	title: string;
	value: number;
}

const ResumeItem = ({ color, title, value }: Props) => {

	return (
		<Sty.Container>
			<Sty.Title>{ title }</Sty.Title>
			<Sty.Info color={color}>R${ value }</Sty.Info>
		</Sty.Container>
	)
}

export default ResumeItem
