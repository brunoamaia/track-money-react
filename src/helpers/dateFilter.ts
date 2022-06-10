import { Item } from '@/types/data'

export const getCurrentMonth = () => {
	let actualDate = new Date();

	return `${actualDate.getFullYear()}-${actualDate.getMonth()+1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
	let newList: Item[] = [];
	let [year, month] = date.split('-')

	for (let i in list) {
		if (
			list[i].date.getFullYear() === parseInt(year) &&
			list[i].date.getMonth() === parseInt(month)
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
