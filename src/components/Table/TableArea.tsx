import * as TableAreaStyles from '@/styles/components/tableArea'
import TableItem from './TableItem'
import { Item } from '@/types/data'

interface Props {list: Item[]}

const TableArea = ({ list }: Props) => {

	return (
		<TableAreaStyles.Table>
			<thead>
				<tr>
					<TableAreaStyles.TableHeadColumn>Data</TableAreaStyles.TableHeadColumn>
					<TableAreaStyles.TableHeadColumn>Categoria</TableAreaStyles.TableHeadColumn>
					<TableAreaStyles.TableHeadColumn>Título</TableAreaStyles.TableHeadColumn>
					<TableAreaStyles.TableHeadColumn>Valor</TableAreaStyles.TableHeadColumn>
				</tr>

			</thead>
			<tbody>
				{
					list.map((item: Item, index: number) => (
						<TableItem item={item} key={index} />
					))
				}
			</tbody>

		</TableAreaStyles.Table>
	)
}

export default TableArea
