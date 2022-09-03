import { Item } from '@/types/data'

const alphanumericGenerate = (newLength?: number): string => {
	const length = newLength || 8
	const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let retVal = ''
	
	for (let i = 0, n = charset.length; i < length; ++i) {
		retVal += charset.charAt(Math.floor(Math.random() * n))
	}
	
	return retVal
}

export const findAlphanumericCode = (itemsInUse: Item[], id: string): number => {
	return itemsInUse.findIndex((item) => item.id === id)
}

export const createNewAlphanumericCode = (itemsInUse: Item[]): string => {
	let code = alphanumericGenerate()
	let isNotValid = true

	while (isNotValid) {
		const codeIndex = findAlphanumericCode(itemsInUse, code)

		if (codeIndex !== -1) {
			code = alphanumericGenerate()
		} else {
			isNotValid = false
		}
	}
	
	return code
}
