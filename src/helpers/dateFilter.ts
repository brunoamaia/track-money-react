import { Item } from '@/types/data'

export const getCurrentMonth = () => {
	let actualDate = new Date();

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
	let newList: Item[] = [];
	let [year, month] = date.split('-')

	for (let i in list) {
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
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate()

	return `${_dateFormatting(day)}/${_dateFormatting(month)}/${year}`
}

export const formatDateToBrowser = (date: Date): string => {
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate()

	return `${year}-${_dateFormatting(month)}-${_dateFormatting(day)}`
}
