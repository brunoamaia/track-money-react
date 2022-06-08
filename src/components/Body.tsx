import { useEffect, useState } from 'react'
import * as BodyStyles from '@/styles/components/body'
import TableArea from '@/components/Table/TableArea'
import categories from '@/data/categories'
import items from '@/data/items'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { Item } from '@/types/data'

function Body() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
	const [filteredList, setFilteredList] = useState<Item[]>([])
	const [list, setList] = useState(items)

	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth))
	}, [list, currentMonth])

	return (
		<BodyStyles.Body>
			<TableArea list={list} />
		</BodyStyles.Body>
	)
}

export default Body
