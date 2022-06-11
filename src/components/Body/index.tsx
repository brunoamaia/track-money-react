import { useEffect, useState } from 'react'
import TableArea from '@/components/Table/TableArea'
import categories from '@/data/categories'
import items from '@/data/items'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { Item } from '@/types/data'
import InfoArea from '../InfoArea'
import * as Sty from './styles'

function Body() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
	const [filteredList, setFilteredList] = useState<Item[]>([])
	const [list, setList] = useState(items)
	const [expense, setExpense] = useState(0)
	const [income, setIncome] = useState(0)

	const handleMonthChange = (newMonth: string) => {
		setCurrentMonth(newMonth)
	}

	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth))
	}, [list, currentMonth])

	useEffect(() => {
		let incomeCount = 0, expenseCount = 0

		for (let i in filteredList) {
			if (categories[filteredList[i].category].expense) {
				expenseCount += filteredList[i].value
			} else {
				incomeCount += filteredList[i].value
			}
		}

		setExpense(expenseCount)
		setIncome(incomeCount)


	}, [filteredList])

	return (
		<Sty.Body>
			<InfoArea 
				currentMonth={currentMonth}
				expense={expense}
				income={income}
				onMonthChange={handleMonthChange}
			/>
			<TableArea list={filteredList} />
		</Sty.Body>
	)
}

export default Body
