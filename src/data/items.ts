import { Item } from '@/types/data'
import newItem from '@/helpers/data/generateRandomData'
import localData from '@/data/localData'

const items: Item[] = localData.length ? localData : newItem

export default items
