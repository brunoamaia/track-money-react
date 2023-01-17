import { createContext, ReactNode, useState } from 'react'
import { Item } from '@/types/data'
import items from '@/data/items'

interface ItemsContextProps {
	itemsInUse: Item[]
	setItemsInUse: (items: Item[]) => void
}

export const ItemsContext = createContext({} as ItemsContextProps)

interface ItemsProps {
	children: ReactNode
}

export function ItemsContextProvider({ children }: ItemsProps){
	const [itemsInUse, setItemsInUse] = useState<Item[]>(items)

	return (
		<ItemsContext.Provider 
			value={{ 
				itemsInUse, 
				setItemsInUse 
			}}
		>
			{ children }
		</ItemsContext.Provider>
	)
}

ItemsContextProvider.displayName = 'context/ItemsContextProvider'
