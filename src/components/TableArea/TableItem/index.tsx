import categories from '@/data/categories'
import EditItem from './EditItem'
import { formatDate } from '@/helpers/dateFilter'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {
	isLast: boolean
	item: Item
	isOdd: boolean
}

const TableItem = ({ isLast, item, isOdd }: Props) => {
	const className = `${isOdd ? 'odd' : 'even'} ${isLast ? 'lastLine' : ''}`

	return (
		<Sty.TableLine className={className}>
			<Sty.TableColumn>{ formatDate(item.date) }</Sty.TableColumn>
			<Sty.TableColumn>
				<Sty.Category color={categories[item.category].color}>
					{ categories[item.category].title }
				</Sty.Category>
			</Sty.TableColumn>
			<Sty.TableColumn>
				<Sty.TitleArea>
					{ item.title }
					<EditItem item={item} />
				</Sty.TitleArea>
			</Sty.TableColumn>
			<Sty.TableColumn>
				<Sty.Value expense={categories[item.category].expense}>
					R${ item.value }
				</Sty.Value>
			</Sty.TableColumn>
		</Sty.TableLine>
	)
}

export default TableItem
