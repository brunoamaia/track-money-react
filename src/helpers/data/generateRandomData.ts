import { createNewAlphanumericCode } from '@/helpers/alphanumericGenerateHelpers'
import { Item } from '@/types/data'

const getDate = new Date()
const actualYear = getDate.getFullYear()
const actualMonth = getDate.getMonth()
const totalMonths = 5
const item: Item[] = []

const getYearAndMonth = (monthStep: number): [year: number, month: number] => {
	const adjustableMonth = actualMonth + monthStep

	if (adjustableMonth > 11) {
		return [actualYear + 1, adjustableMonth - 12]
	}
		
	if (adjustableMonth < 0) {
		return [actualYear - 1, 12 + adjustableMonth]
	}

	return [actualYear, adjustableMonth]
}

const insertItem = (year: number, month: number) => {
	const limiteDays = month === 1 ? 28 : 30
	const day = () => Math.floor(Math.random() * limiteDays) + 1
	const newDate = () => new Date(year, month, day())
	const newId = () => createNewAlphanumericCode(item)

	item.push({ date: newDate(), category: 'salary', title: 'Salário ACME', value: 2500.00, id: newId() })
	item.push({ date: newDate(), category: 'rent', title: 'Aluguel Apt', value: 1000.00, id: newId() })
	item.push({ date: newDate(), category: 'food', title: 'Burger King', value: 30.00, id: newId() })
	item.push({ date: newDate(), category: 'food', title: 'Miojo', value: 15.12, id: newId() })
}

const generateNewDate = (index: number, steps: number) => {
	const centerPoint = Math.round(steps/2) - 1
	const monthStep = index - centerPoint
	const [newYear, newMonth] = getYearAndMonth(monthStep)

	insertItem(newYear, newMonth)
}

for (let index = 0; index < totalMonths; index++) {
	generateNewDate(index, totalMonths)
}

export default item
