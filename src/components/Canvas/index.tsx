import * as Sty from './styles'

interface Props {
	id: string;
	width: number;
	height: number;
}

const Canvas = ({ id, height, width }: Props) => {

	return (
		<Sty.Canvas id={id} height={height} width={width} />
	)
}

Canvas.displayName = 'components/Canvas'

export default Canvas
