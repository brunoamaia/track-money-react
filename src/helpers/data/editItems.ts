import { Item } from '@/types/data'
import { findAlphanumericCode } from '../alphanumericGenerateHelpers'

export const handleEditItem = (items: Item[], setNewItems: (newItems: Item[]) => void, item: Item) => {
	const index = findAlphanumericCode(items, item.id)
	const newItems = [...items]
	newItems[index] = item
	
	setNewItems(newItems)
	console.log('alterou')
}
