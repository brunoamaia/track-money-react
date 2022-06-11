import categories from '@/data/categories'
import { formatDate } from  '@/helpers/dateFilter'
import { Item } from '@/types/data'
import * as Sty from './styles'

interface Props {item: Item}

const TableItem = ({ item }: Props) => {
	return (
		<Sty.TableLine>
			<Sty.TableColumn>{formatDate(item.date)}</Sty.TableColumn>
			<Sty.TableColumn>
				<Sty.Category color={categories[item.category].color}>
					{categories[item.category].title}
				</Sty.Category>
			</Sty.TableColumn>
			<Sty.TableColumn>{item.title}</Sty.TableColumn>
			<Sty.TableColumn>
				<Sty.Value expense={categories[item.category].expense}>
					R${item.value}
				</Sty.Value>
			</Sty.TableColumn>
		</Sty.TableLine>
	)
};

export default TableItem
