import categories from '@/data/categories'
import { formatDate } from  '@/helpers/dateFilter'
import { Item } from '@/types/data'
import * as TableItemStyles from '@/styles/components/tableItem'

interface Props {item: Item}

const TableItem = ({ item }: Props) => {
	return (
		<TableItemStyles.TableLine>
			<TableItemStyles.TableColumn>{formatDate(item.date)}</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>
				<TableItemStyles.Category color={categories[item.category].color}>
					{categories[item.category].title}
				</TableItemStyles.Category>
			</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>{item.title}</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>
				<TableItemStyles.Value expense={categories[item.category].expense}>
					R${item.value}
				</TableItemStyles.Value>
			</TableItemStyles.TableColumn>
		</TableItemStyles.TableLine>
	)
};

export default TableItem
