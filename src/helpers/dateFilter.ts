import { Item } from '@/types/data'

export const getCurrentMonth = () => {
	const actualDate = new Date()

	return `${actualDate.getFullYear()}-${actualDate.getMonth()+1}`
}

export const formatCurrentMonth = (currentMonth: string): string => {
	const [year, month] = currentMonth.split('-')
	const months = [
		'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
	]

	return `${months[parseInt(month) - 1]} de ${year}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
	const newList: Item[] = []
	const [year, month] = date.split('-')

	for (const i in list) {
		if (
			list[i].date.getFullYear() === parseInt(year) &&
			list[i].date.getMonth() === parseInt(month) - 1
		) {
			newList.push(list[i])
		}
	}

	return newList
}

const _dateFormatting = (value: number): string => value < 10 ? `0${value}` : `${value}`

export const formatDate = (date: Date): string => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	return `${_dateFormatting(day)}/${_dateFormatting(month)}/${year}`
}

export const formatDateToBrowser = (date: Date): string => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	return `${year}-${_dateFormatting(month)}-${_dateFormatting(day)}`
}
