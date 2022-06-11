import TableItem from '@/components/TableArea/TableItem'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {list: Item[]}

const TableArea = ({ list }: Props) => {

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
			<tbody>
				{
					list.map((item: Item, index: number) => (
						<TableItem item={item} key={index} />
					))
				}
			</tbody>

		</Sty.Table>
	)
}

export default TableArea
