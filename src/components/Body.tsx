import { useEffect, useState } from 'react'
import * as BodyStyles from '@/styles/components/body'
import TableArea from '@/components/Table/TableArea'
import categories from '@/data/categories'
import items from '@/data/items'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { Item } from '@/types/data'
import InfoArea from './InfoArea'

function Body() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
	const [filteredList, setFilteredList] = useState<Item[]>([])
	const [list, setList] = useState(items)

	const handleMonthChange = (newMonth: string) => {
		setCurrentMonth(newMonth)
	}

	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth))
	}, [list, currentMonth])

	return (
		<BodyStyles.Body>
			<InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} />
			<TableArea list={filteredList} />
		</BodyStyles.Body>
	)
}

export default Body
