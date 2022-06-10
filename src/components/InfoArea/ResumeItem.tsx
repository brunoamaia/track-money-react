import * as Stl from '@/styles/components/resumeItem'

interface Props {
	color?: string;
	title: string;
	value: number;
}

const ResumeItem = ({ color, title, value }: Props) => {

	return (
		<Stl.Container>
			<Stl.Title>{title}</Stl.Title>
			<Stl.Info color={color}>R${value}</Stl.Info>
		</Stl.Container>
	)
}

export default ResumeItem
