import { useContext } from 'react'
import { ItemsContext } from '@/context/ItemsContext'

export const useItems = () => {
	return useContext(ItemsContext)
}
