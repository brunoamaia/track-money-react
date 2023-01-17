import TableItem from '@/components/TableArea/TableItem'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {list: Item[]}

const TableArea = ({ list }: Props) => {
	const isOddLine = (index: number): boolean=> {
		return index%2 === 1 ? true : false
	}

	return (
		<Sty.Table>
			<thead>
				<tr>
					<Sty.TableHeadColumn>Data</Sty.TableHeadColumn>
					<Sty.TableHeadColumn>Categoria</Sty.TableHeadColumn>
					<Sty.TableHeadColumn>Título</Sty.TableHeadColumn>
					<Sty.TableHeadColumn>Valor</Sty.TableHeadColumn>
				</tr>

			</thead>
			<Sty.TableBody>
				{
					list.map((item: Item, index: number) => (
						<TableItem isLast={index === list.length - 1} isOdd={isOddLine(index)} item={item} key={index} />
					))
				}
			</Sty.TableBody>

		</Sty.Table>
	)
}

TableArea.displayName = 'components/TableArea'

export default TableArea
