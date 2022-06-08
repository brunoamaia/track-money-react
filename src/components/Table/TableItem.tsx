import * as TableItemStyles from '@/styles/components/tableItem'
import { Item } from '@/types/data'

interface Props {item: Item}

const TableItem = ({ item }: Props) => {
	return (
		<TableItemStyles.TableLine>
			<TableItemStyles.TableColumn>{item.date.getDate()}</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>{item.category}</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>{item.title}</TableItemStyles.TableColumn>
			<TableItemStyles.TableColumn>R${item.value}</TableItemStyles.TableColumn>
		</TableItemStyles.TableLine>
	)
};

export default TableItem
