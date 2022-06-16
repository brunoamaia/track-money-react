import { useEffect, useState } from 'react'
import InfoArea from '@/components/InfoArea'
import InputArea from '@/components/InputArea'
import TableArea from '@/components/TableArea'
import categories from '@/data/categories'
import items from '@/data/items'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { Item } from '@/types/data'
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

	const handleAddItem = (item: Item) => {
		const newList = [...list]
		
		newList.push(item)
		
		setList(newList)
	}

	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth))
	}, [list, currentMonth])

	useEffect(() => {
		let incomeCount = 0, expenseCount = 0

		for (const i in filteredList) {
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
			<InputArea onAddItem={handleAddItem}/>
			<TableArea list={filteredList} />
		</Sty.Body>
	)
}

export default Body
