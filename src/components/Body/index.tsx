import { useEffect, useState } from 'react'
import Canvas from '@/components/Canvas'
import InfoArea from '@/components/InfoArea'
import InputArea from '@/components/InputArea'
import TableArea from '@/components/TableArea'
import categories from '@/data/categories'
import { filterListByMonth, getCurrentMonth } from '@/helpers/dateFilter'
import { useItems } from '@/hooks/useItems'
import { Item } from '@/types/data'
import * as Sty from './styles'

function Body() {
	const { itemsInUse, setItemsInUse } = useItems()
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
	const [filteredList, setFilteredList] = useState<Item[]>([])
	const [expense, setExpense] = useState(0)
	const [income, setIncome] = useState(0)

	const handleMonthChange = (newMonth: string) => {
		setCurrentMonth(newMonth)
	}

	const handleAddItem = (item: Item) => {
		const newList = [...itemsInUse]
		
		newList.push(item)
		
		setItemsInUse(newList)
	}

	useEffect(() => {
		setFilteredList(filterListByMonth(itemsInUse, currentMonth))
	}, [itemsInUse, currentMonth])

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
		<Sty.BodyWrapper>
			<InfoArea 
				currentMonth={currentMonth}
				expense={expense}
				income={income}
				onMonthChange={handleMonthChange}
			/>
			<InputArea onAddItem={handleAddItem}/>
			<TableArea list={filteredList} />
			<Canvas id={'canvas'} height={300} width={300} />
		</Sty.BodyWrapper>
	)
}

Body.displayName = 'components/Body'

export default Body
