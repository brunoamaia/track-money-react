import { useEffect } from 'react'
import * as Sty from './styles'
import { Item } from '@/types/data'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chartController from '../../helpers/canvas/initialState'

interface Props {
	currentData: Item[]
	id: string
	width: number
	height: number
}

const Canvas = ({ currentData, id, height, width }: Props) => {

	useEffect(() => {
		chartController(currentData)
		
	})
		
	return (
		<Sty.Canvas id={id} height={height} width={width} />
	)
}

Canvas.displayName = 'components/Canvas'

export default Canvas
